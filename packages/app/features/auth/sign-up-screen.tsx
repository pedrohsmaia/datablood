import {
  Button,
  Fieldset,
  Form,
  Input,
  Label,
  Link,
  SizableText,
  Text,
  YStack,
  useToastController,
} from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'
import { AuthFormWrapper } from './form-wrapper'

export const SignUpScreen = () => {
  const supabase = useSupabase()
  const toast = useToastController()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) toast.show(error.message)
    else toast.show('Check your email for a link!')
    setLoading(false)
  }

  return (
    <Form asChild onSubmit={() => signUpWithEmail()}>
      <AuthFormWrapper>
        <AuthFormWrapper.Body>
          <AuthFormWrapper.Title>Get Started</AuthFormWrapper.Title>
          <AuthFormWrapper.Subtitle>Create a new account</AuthFormWrapper.Subtitle>
          <Fieldset>
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              placeholder="email@address.com"
              autoCapitalize="none"
            />
          </Fieldset>

          <Fieldset>
            <Label htmlFor="signup-password">Password</Label>
            <Input
              secureTextEntry
              textContentType="password"
              id="signup-password"
              autoComplete="password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              autoCapitalize={'none'}
            />
          </Fieldset>
        </AuthFormWrapper.Body>
        <AuthFormWrapper.Footer>
          <Form.Trigger asChild disabled={loading}>
            <Button borderRadius={100} themeInverse color="$color1">
              Sign up
            </Button>
          </Form.Trigger>
          <Link replace disabled={loading} href="/sign-in" textAlign="center" theme="alt1">
            Already signed up?{' '}
            <Text fontFamily="$body" textDecorationLine="underline">
              Sign in
            </Text>
          </Link>
        </AuthFormWrapper.Footer>
      </AuthFormWrapper>
    </Form>
  )
}
