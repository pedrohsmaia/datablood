import {
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
  useToastController,
} from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'

// nice article for implementing Supabase OAuth with expo-auth-session: https://dev.to/fedorish/google-sign-in-using-supabase-and-react-native-expo-14jf

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

    if (error) {
      toast.show(error.message)
    } else {
      router.replace('/')
    }
    setLoading(false)
  }

  return (
    <Form onSubmit={() => signInWithEmail()} asChild>
      <FormWrapper>
        <YStack gap="$3">
          <H2>Welcome Back</H2>
          <Paragraph theme="alt1">Sign in to your account</Paragraph>
        </YStack>
        <FormWrapper.Body>
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
