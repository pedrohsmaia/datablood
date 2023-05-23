import { Button, Fieldset, Form, Input, Label, YStack, useToastController } from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useState } from 'react'
import { Settings } from './components/settings'

export const ChangePasswordScreen = () => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const supabase = useSupabase()
  const toast = useToastController()

  const handleChangePassword = async () => {
    if (!password || !passwordConfirm) {
      toast.show('Fill out the fields first.')
      return
    }
    if (password !== passwordConfirm) {
      toast.show("Your passwords don't match.")
      return
    }
    const { data, error } = await supabase.auth.updateUser({ password })
    if (error) {
      toast.show(error.message)
    } else {
      toast.show('Successfully updated!')
    }
  }

  return (
    <Form onSubmit={() => handleChangePassword()} p="$5" gap="$10" f={1} jc="space-between">
      <YStack gap="$4">
        <Settings.Title>Change Password</Settings.Title>
        <Fieldset>
          <Label htmlFor="password">New Password</Label>
          <Input
            id="password"
            secureTextEntry
            textContentType="password"
            autoComplete="password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            autoCapitalize={'none'}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password-confirm">Confirm Password</Label>
          <Input
            id="password-confirm"
            secureTextEntry
            textContentType="password"
            autoComplete="password"
            onChangeText={(text) => setPasswordConfirm(text)}
            value={passwordConfirm}
            placeholder="Password"
            autoCapitalize={'none'}
          />
        </Fieldset>
      </YStack>

      <Form.Trigger asChild>
        <Button themeInverse>Update Password</Button>
      </Form.Trigger>
    </Form>
  )
}
