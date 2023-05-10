import { useQuery } from '@tanstack/react-query'
import { useSupabase } from './supabase/useSupabase'
import { useSessionContext } from './supabase/useSessionContext'
import { useRouter } from 'solito/router'

export const useUser = () => {
  const { session, isLoading: isLoadingSession } = useSessionContext()
  const user = session?.user
  const supabase = useSupabase()
  const { data: profile, isLoading: isLoadingProfile } = useQuery(['profile'], {
    queryFn: async () => {
      const { data, error } = await supabase.from('profiles').select('*').single()
      if (error) throw new Error(error.message)
      return data
    },
  })
  const router = useRouter()

  return {
    user,
    profile,
    isLoadingSession,
    isLoadingProfile,
    isLoading: isLoadingSession || isLoadingProfile,
    logOut: async () => {
      if (session) {
        await supabase.auth.signOut()
        await router.replace('/login')
      }
    },
  }
}
