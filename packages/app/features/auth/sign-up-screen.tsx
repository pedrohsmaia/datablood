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
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useEffect, useState } from 'react'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

export const SignUpScreen = () => {
  const supabase = useSupabase()
  const router = useRouter()
  const updateParams = useUpdateParams()
  const { params } = useParams()
  const [error, setError] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [email, setEmail] = useState(params?.email || '')
  useEffect(() => {
    updateParams({ email: undefined })
  }, [])
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
      setError(error.message)
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
        </FormWrapper.Body>
        <FormWrapper.Footer>
          <Button
            themeInverse
            icon={ChevronLeft}
            borderRadius={100}
            onPress={() => setShowSuccess(false)}
          >
            Back
          </Button>
        </FormWrapper.Footer>
      </FormWrapper>
    )
  }

  // supabase won't return field specific errors, so we do this:
  const errorLc = error?.toLowerCase()
  const isEmailErrored = errorLc?.includes('email') || errorLc?.includes('credentials')
  const isPasswordErrored = errorLc?.includes('password') || errorLc?.includes('credentials')

  return (
    <Form asChild onSubmit={() => signUpWithEmail()}>
      <FormWrapper>
        <YStack gap="$3">
          <H2>Get Started</H2>
          <Paragraph theme="alt2">Create a new account</Paragraph>
        </YStack>
        <FormWrapper.Body>
          <Fieldset>
            <Label theme={isEmailErrored ? 'red_alt2' : undefined} htmlFor="signup-email">
              Email
            </Label>
            <Input
              theme={isEmailErrored ? 'red_alt2' : undefined}
              id="signup-email"
              onChangeText={handleUpdateEmail}
              value={email}
              keyboardType="email-address"
              placeholder="email@address.com"
              autoCapitalize="none"
            />
          </Fieldset>

          <Fieldset>
            <Label theme={isPasswordErrored ? 'red_alt2' : undefined} htmlFor="signup-password">
              Password
            </Label>
            <Input
              theme={isPasswordErrored ? 'red_alt2' : undefined}
              secureTextEntry
              textContentType="password"
              id="signup-password"
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
                animation="quick"
                opacity={1}
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
                theme="red_alt2"
              >
                {error}
              </Paragraph>
            )}
          </AnimatePresence>
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
            href={`/sign-in?${new URLSearchParams(email ? { email } : undefined).toString()}`}
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
