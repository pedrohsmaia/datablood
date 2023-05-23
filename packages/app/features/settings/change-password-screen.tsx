import {
  Button,
  Fieldset,
  Form,
  FormWrapper,
  H2,
  Input,
  Label,
  YStack,
  useToastController,
} from '@my/ui'
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
    <Form onSubmit={() => handleChangePassword()} asChild>
      <FormWrapper>
        <H2>Change Password</H2>
        <FormWrapper.Body>
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
        </FormWrapper.Body>

        <Form.Trigger asChild>
          <Button themeInverse>Update Password</Button>
        </Form.Trigger>
      </FormWrapper>
    </Form>
  )
}
