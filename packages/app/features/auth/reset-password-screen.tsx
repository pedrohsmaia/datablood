import { Button, Fieldset, Form, Input, Label, Link, useToastController } from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import React, { useState } from 'react'
import { AuthFormWrapper } from './form-wrapper'

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
      <AuthFormWrapper>
        <AuthFormWrapper.Body>
          <AuthFormWrapper.Title>Reset your password</AuthFormWrapper.Title>
          <AuthFormWrapper.Subtitle>
            Type in your email and we'll send you a link to reset your password
          </AuthFormWrapper.Subtitle>

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
        </AuthFormWrapper.Body>

        <AuthFormWrapper.Footer>
          <Form.Trigger asChild disabled={loading}>
            <Button borderRadius={100} themeInverse>
              Send Link
            </Button>
          </Form.Trigger>

          <Link disabled={loading} href="/sign-in" textAlign="center">
            Already have an account? Sign in
          </Link>
        </AuthFormWrapper.Footer>
      </AuthFormWrapper>
    </Form>
  )
}
