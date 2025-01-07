import { Button } from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import * as WebBrowser from 'expo-web-browser'
import { useRouter } from 'solito/router'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'

import { IconGoogle } from './IconGoogle'

console.log(process.env)

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_SIGN_IN_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_URL_SCHEME,
})

export function GoogleSignIn() {
  const supabase = useSupabase()
  const router = useRouter()

  async function signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices()
      const result = await GoogleSignin.signIn()

      const user = result?.data?.user

      console.log(result)
    } catch (error) {
      console.error(error)
    }

    return

    try {
      // whatever route you want to deeplink to; make sure to configure in Supabase dashboard
      const redirectUri = 'myapp://'
      const provider = 'google'
      const response = await WebBrowser.openAuthSessionAsync(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/auth/v1/authorize?${new URLSearchParams({
          provider,
          redirect_to: redirectUri,
        })}`,
        redirectUri
      )

      if (response.type === 'success') {
        const url = response.url
        const params = url.split('#')[1]
        if (!params) return
        const paramsArray = params.split('&')
        const accessToken = paramsArray[0]?.split('=')[1]
        const refreshToken = paramsArray[2]?.split('=')[1]

        if (accessToken && refreshToken) {
          // handle error
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
          if (!error) authSuccessful = true
          if (error) {
            // handle error
          }
        }
      }
    } catch (error) {
      // handle error
      console.error(error)
    } finally {
      WebBrowser.maybeCompleteAuthSession()
      if (authSuccessful) router.replace('/')
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
