import {
  Button,
  Fieldset,
  Form,
  FormWrapper,
  Input,
  Label,
  Link,
  Text,
  useToastController,
  H2,
  Paragraph,
  YStack,
} from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'

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
      options: {
        // To take user's name other info
        data: {
          // first_name: firstName, // coming from state
          // last_name: lastName,
        },
      },
    })

    if (error) toast.show(error.message)
    else toast.show('Check your email for a link!')
    setLoading(false)
  }

  return (
    <Form asChild onSubmit={() => signUpWithEmail()}>
      <FormWrapper>
        <YStack gap="$1">
          <H2>Get Started</H2>
          <Paragraph theme="alt2">Create a new account</Paragraph>
        </YStack>
        <FormWrapper.Body>
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
        </FormWrapper.Body>
        <FormWrapper.Footer>
          <Form.Trigger asChild disabled={loading}>
            <Button borderRadius={100} themeInverse>
              Sign up
            </Button>
          </Form.Trigger>
          <Link
            color="$color"
            replace
            disabled={loading}
            href="/sign-in"
            textAlign="center"
            theme="alt1"
          >
            Already signed up? <Text textDecorationLine="underline">Sign in</Text>
          </Link>
        </FormWrapper.Footer>
      </FormWrapper>
    </Form>
  )
}
