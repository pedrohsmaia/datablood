import { useUser } from 'app/utils/useUser'
import { useRouter, useSegments } from 'expo-router'
import { useEffect, useState } from 'react'

/**
 *  This hook will protect the route access based on user authentication.
 */
export function useProtectedRoute() {
  const { user, isLoading } = useUser()
  const segments = useSegments()
  const router = useRouter()
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'
    if (
      // If the user is not logged in and the initial segment is not anything in the auth group.
      !isLoading &&
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the login page.
      router.replace('/onboarding')
    } else if (user && inAuthGroup) {
      // Redirect away from the login page.
      router.replace('/')
    }
    // after first loading, set loading to false - this can be used for showing/hiding the splash screen
    if (!isLoading) {
      setInitialLoading(false)
    }
  }, [user, segments, isLoading])

  return {
    initialLoading,
  }
}
