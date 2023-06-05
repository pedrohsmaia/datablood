import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { useRouter, useSegments } from 'expo-router'
import { useEffect, useState } from 'react'

/**
 *  this hook will protect the route access based on user authentication.
 */
export function useProtectedRoute() {
  const { session, isLoading } = useUser()
  const segments = useSegments()
  const router = useRouter()
  const supabase = useSupabase()
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'
    if (
      // if the user is not logged in and the initial segment is not anything in the auth group.
      // `user` being present does not mean user is logged in. it's session that determines if we have the user logged in, so we check session.
      !isLoading &&
      !session &&
      !inAuthGroup
    ) {
      // redirect to the login page.
      router.replace('/onboarding')
    } else if (session && inAuthGroup) {
      // Redirect away from the login page.
      router.replace('/')
    }
    // after first loading, set loading to false - this can be used for showing/hiding the splash screen
    if (!isLoading) {
      setInitialLoading(false)
    }
  }, [session, segments, isLoading])

  return {
    initialLoading,
  }
}
