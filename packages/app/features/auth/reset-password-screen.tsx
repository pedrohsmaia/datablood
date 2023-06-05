import {
  Button,
  Fieldset,
  Form,
  FormWrapper,
  Input,
  Label,
  Link,
  useToastController,
  H2,
  Paragraph,
  YStack,
  Text,
} from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'

export const ResetPasswordScreen = () => {
  const supabase = useSupabase()
  const toast = useToastController()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function resetPassword() {
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email)

    if (error) toast.show(error.message)
    else toast.show('Check your email for a link!')
    setLoading(false)
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
            <Label htmlFor="reset-email">Email</Label>
            <Input
              id="reset-email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              placeholder="email@address.com"
              autoCapitalize="none"
            />
          </Fieldset>
        </FormWrapper.Body>

        <FormWrapper.Footer>
          <Form.Trigger asChild disabled={loading}>
            <Button borderRadius={100} themeInverse>
              Send Link
            </Button>
          </Form.Trigger>

          <Link disabled={loading} href="/sign-in" textAlign="center" theme="alt1">
            Done resetting?{' '}
            <Text textDecorationLine="underline">
              Sign in
            </Text>
          </Link>
        </FormWrapper.Footer>
      </FormWrapper>
    </Form>
  )
}
