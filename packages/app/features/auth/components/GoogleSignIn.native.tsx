import { Button } from '@my/ui'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useRouter } from 'solito/router'

import { IconGoogle } from './IconGoogle'

GoogleSignin.configure({
  iosClientId: process.env.GOOGLE_IOS_CLIENT_ID,
})

export function GoogleSignIn() {
  const supabase = useSupabase()
  const router = useRouter()

  async function signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices()
      const response = await GoogleSignin.signIn()
      const token = response?.data?.idToken

      if (token) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token,
        })

        console.log('data', data)

        if (error) {
          console.log('error', error)
          throw new Error('error', error)
        }

        router.replace('/')
      } else {
        throw new Error('no ID token present!')
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  return (
    <Button
      onPress={() => signInWithGoogle()}
      icon={IconGoogle}
      // styles to make it look like the native Apple button on AppleSignIn.native.tsx
      scaleIcon={0.75}
      space="$1.5"
      bg="transparent"
      pressStyle={{ bg: 'transparent', o: 0.6, bw: '$0' }}
      animation="200ms"
      chromeless
    >
      Sign in with Google
    </Button>
  )
}
