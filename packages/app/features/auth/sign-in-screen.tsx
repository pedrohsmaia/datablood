import {
  AnimatePresence,
  Button,
  Fieldset,
  Form,
  FormWrapper,
  H2,
  Input,
  Label,
  Link,
  Paragraph,
  Text,
  YStack,
} from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'

// nice article for implementing Supabase OAuth with expo-auth-session: https://dev.to/fedorish/google-sign-in-using-supabase-and-react-native-expo-14jf

export const SignInScreen = () => {
  const supabase = useSupabase()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleUpdateEmail = (newEmail: string) => {
    setError(null)
    setEmail(newEmail)
  }

  const handleUpdatePassword = (newPassword: string) => {
    setError(null)
    setPassword(newPassword)
  }

  async function signInWithEmail() {
    setError(null)
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.replace('/')
    }
    setLoading(false)
  }

  // supabase won't return field specific errors, so we do this:
  const errorLc = error?.toLowerCase()
  const isEmailErrored = errorLc?.includes('email') || errorLc?.includes('credentials')
  const isPasswordErrored = errorLc?.includes('password') || errorLc?.includes('credentials')

  return (
    <Form onSubmit={() => signInWithEmail()} asChild>
      <FormWrapper>
        <YStack gap="$3">
          <H2>Welcome Back</H2>
          <Paragraph theme="alt1">Sign in to your account</Paragraph>
        </YStack>
        <FormWrapper.Body>
          <Fieldset>
            <Label theme={isEmailErrored ? 'red_alt2' : undefined} htmlFor="signin-email">
              Email
            </Label>
            <Input
              theme={isEmailErrored ? 'red_alt2' : undefined}
              id="signin-email"
              onChangeText={handleUpdateEmail}
              value={email}
              keyboardType="email-address"
              placeholder="email@address.com"
              autoCapitalize="none"
            />
          </Fieldset>
          <Fieldset>
            <Label theme={isPasswordErrored ? 'red_alt2' : undefined} htmlFor="signin-password">
              Password
            </Label>
            <Input
              theme={isPasswordErrored ? 'red_alt2' : undefined}
              secureTextEntry
              textContentType="password"
              id="signin-password"
              autoComplete="password"
              onChangeText={handleUpdatePassword}
              value={password}
              placeholder="Password"
              autoCapitalize={'none'}
            />
          </Fieldset>
          <AnimatePresence>
            {!!error && (
              <Paragraph
                key="error-paragraph"
                animation="200ms"
                opacity={1}
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
                theme="red_alt2"
              >
                {error}
              </Paragraph>
            )}
          </AnimatePresence>
          <Link
            color="$color"
            href="/reset-password"
            theme="alt2"
            textDecorationLine="underline"
            disabled={loading}
          >
            Forgot your password?
          </Link>
        </FormWrapper.Body>
        <FormWrapper.Footer>
          <Form.Trigger asChild disabled={loading}>
            <Button borderRadius={100} themeInverse>
              Sign in
            </Button>
          </Form.Trigger>
          {/* <YStack>
            <Button disabled={loading} onPress={() => signInWithProvider('github')}>
              GitHub Login
            </Button>
          </YStack> */}
          <Link
            color="$color"
            replace
            disabled={loading}
            href="/sign-up"
            textAlign="center"
            theme="alt1"
          >
            Don't have an account? <Text textDecorationLine="underline">Sign up</Text>
          </Link>
        </FormWrapper.Footer>
      </FormWrapper>
    </Form>
  )
}
