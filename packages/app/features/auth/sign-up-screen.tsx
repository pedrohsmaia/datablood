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
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'

export const SignUpScreen = () => {
  const supabase = useSupabase()
  const router = useRouter()
  const toast = useToastController()
  const [showSuccess, setShowSuccess] = useState(false)
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

    if (error) {
      toast.show(error.message)
    } else {
      router.replace('/')
      // do this instead if you're doing email confirms:
      // setShowSuccess(true)
    }
    setLoading(false)
  }

  if (showSuccess) {
    return (
      <FormWrapper>
        <FormWrapper.Body>
          <YStack gap="$3">
            <H2>Check Your Email</H2>
            <Paragraph theme="alt1">
              We've sent you a confirmation link. Please check your email ({email}) and confirm it.
            </Paragraph>
          </YStack>

          <Button icon={ChevronLeft} als="flex-start" onPress={() => setShowSuccess(false)}>
            Back
          </Button>
        </FormWrapper.Body>
      </FormWrapper>
    )
  }

  return (
    <Form asChild onSubmit={() => signUpWithEmail()}>
      <FormWrapper>
        <YStack gap="$3">
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
