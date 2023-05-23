import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useSupabase } from './supabase/useSupabase'
import { useSessionContext } from './supabase/useSessionContext'
import { useRouter } from 'solito/router'

export const useUser = () => {
  const { session, isLoading: isLoadingSession } = useSessionContext()
  const user = session?.user
  const supabase = useSupabase()
  const queryClient = useQueryClient()
  const {
    data: profile,
    isLoading: isLoadingProfile,
    refetch,
  } = useQuery(['profile'], {
    queryFn: async () => {
      const { data, error } = await supabase.from('profiles').select('*').single()
      if (error) {
        if (error.code === 'PGRST116') {
          await supabase.auth.signOut()
          router.replace('/onboarding')
          return null
        }
        throw new Error(error.message)
      }
      return data
    },
  })
  const router = useRouter()

  return {
    user,
    profile,
    getAvatar: () => {
      if (profile?.avatar_url) return profile.avatar_url
      if (typeof user?.user_metadata.avatar_url === 'string') return user.user_metadata.avatar_url

      const params = new URLSearchParams()
      params.append('name', profile?.name ?? user?.email ?? '')
      return `https://ui-avatars.com/api/?${params.toString()}`
    },
    updateProfile: () => refetch(),
    isLoadingSession,
    isLoadingProfile,
    isLoading: isLoadingSession || isLoadingProfile,
    logOut: async () => {
      if (session) {
        await supabase.auth.signOut()
        await router.replace('/onboarding')
      }
    },
  }
}
