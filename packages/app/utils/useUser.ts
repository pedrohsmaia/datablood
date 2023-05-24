import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'solito/router'
import { useSessionContext } from './supabase/useSessionContext'
import { useSupabase } from './supabase/useSupabase'

export const useUser = () => {
  const { session, isLoading: isLoadingSession } = useSessionContext()
  const user = session?.user
  const supabase = useSupabase()
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

  const avatarUrl = (function () {
    if (profile?.avatar_url) return profile.avatar_url
    if (typeof user?.user_metadata.avatar_url === 'string') return user.user_metadata.avatar_url

    const params = new URLSearchParams()
    params.append('name', profile?.name ?? user?.email ?? '')
    return `https://ui-avatars.com/api/?${params.toString()}`
  })()

  return {
    user,
    profile,
    avatarUrl,
    updateProfile: () => refetch(),
    isLoadingSession,
    isLoadingProfile,
    isLoading: isLoadingSession || isLoadingProfile,
    logOut: async () => {
      if (session) {
        await supabase.auth.signOut()
        router.replace('/onboarding')
      }
    },
  }
}
