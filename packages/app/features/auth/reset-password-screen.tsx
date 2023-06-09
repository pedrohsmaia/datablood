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

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

export const ResetPasswordScreen = () => {
  const supabase = useSupabase()
  const { params } = useParams()
  const updateParams = useUpdateParams()
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState(params?.email || '')
  useEffect(() => {
    updateParams({ email: undefined })
  }, [])
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleUpdateEmail = (newEmail: string) => {
    setError(null)
    setEmail(newEmail)
  }

  async function resetPassword() {
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email)

    if (error) {
      setError(error.message)
    } else {
      setShowSuccess(true)
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
              We've sent you a reset link. Please check your email ({email}) and confirm it.
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

  return (
    <Form onSubmit={() => resetPassword()} asChild>
      <FormWrapper>
        <YStack gap="$3">
          <H2>Reset your password</H2>
          <Paragraph theme="alt1">
            Type in your email and we'll send you a link to reset your password
          </Paragraph>
        </YStack>
        <FormWrapper.Body>
          <Fieldset>
            <Label theme={error ? 'red_alt2' : undefined} htmlFor="reset-email">
              Email
            </Label>
            <Input
              theme={error ? 'red_alt2' : undefined}
              id="reset-email"
              onChangeText={handleUpdateEmail}
              value={email}
              keyboardType="email-address"
              placeholder="email@address.com"
              autoCapitalize="none"
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
              Send Link
            </Button>
          </Form.Trigger>

          <Link
            disabled={loading}
            href={`/sign-in?${new URLSearchParams(email ? { email } : undefined)}`}
            textAlign="center"
            theme="alt1"
          >
            Done resetting? <Text textDecorationLine="underline">Sign in</Text>
          </Link>
        </FormWrapper.Footer>
      </FormWrapper>
    </Form>
  )
}
