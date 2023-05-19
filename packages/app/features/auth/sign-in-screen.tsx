import { Button, Fieldset, Form, Input, Label, Link, Text, useToastController } from '@my/ui'
import { Provider } from '@supabase/supabase-js'
import { redirect } from 'app/utils/redirect'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'
import { AuthFormWrapper } from './form-wrapper'

export const SignInScreen = () => {
  const supabase = useSupabase()
  const toast = useToastController()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) toast.show(error.message)
    else {
      router.replace('/')
    }
    setLoading(false)
  }

  async function signInWithProvider(provider: Provider) {
    setLoading(true)
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        skipBrowserRedirect: true,
      },
    })

    if (error) {
      toast.show(error.message)
    } else {
      redirect(data.url)
    }
    setLoading(false)
  }
  return (
    <Form onSubmit={() => signInWithEmail()} asChild>
      <AuthFormWrapper>
        <AuthFormWrapper.Body>
          <AuthFormWrapper.Title>Welcome back</AuthFormWrapper.Title>
          <AuthFormWrapper.Subtitle>Sign in to your account</AuthFormWrapper.Subtitle>

          <Fieldset>
            <Label htmlFor="signin-email">Email</Label>
            <Input
              id="signin-email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              placeholder="email@address.com"
              autoCapitalize="none"
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="signin-password">Password</Label>
            <Input
              secureTextEntry
              textContentType="password"
              id="signin-password"
              autoComplete="password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              autoCapitalize={'none'}
            />
          </Fieldset>
          <Link
            color="$color"
            href="/reset-password"
            theme="alt2"
            textDecorationLine="underline"
            disabled={loading}
          >
            Forgot your password?
          </Link>
        </AuthFormWrapper.Body>
        <AuthFormWrapper.Footer>
          <Form.Trigger asChild disabled={loading}>
            <Button borderRadius={100} themeInverse color="$color1">
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
            Don't have an account?{' '}
            <Text fontFamily="$body" textDecorationLine="underline">
              Sign up
            </Text>
          </Link>
        </AuthFormWrapper.Footer>
      </AuthFormWrapper>
    </Form>
  )
}
