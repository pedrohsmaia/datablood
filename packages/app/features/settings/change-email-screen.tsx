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
import { useUser } from 'app/utils/useUser'
import { useState } from 'react'
import { Settings } from './components/settings'

export const ChangeEmailScreen = () => {
  const { user } = useUser()
  const [email, setEmail] = useState('')
  const supabase = useSupabase()
  const toast = useToastController()

  const handleChangePassword = async () => {
    if (!email) {
      toast.show('Fill out the fields first.')
      return
      return
    }

    const { data, error } = await supabase.auth.updateUser({ email })
    if (error) {
      toast.show(error.message)
    } else {
      await supabase.auth.refreshSession()
      toast.show('Successfully updated!')
    }
  }

  return (
    <Form onSubmit={() => handleChangePassword()} asChild>
      <FormWrapper>
        <FormWrapper.Body>
          <H2>Change Email</H2>

          <Fieldset>
            <Label htmlFor="current-email">Current Email</Label>
            <Input
              disabled
              opacity={0.5}
              id="current-email"
              autoComplete="email"
              value={user?.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Fieldset>

          <Fieldset>
            <Label htmlFor="email">New Email</Label>
            <Input
              id="email"
              autoComplete="email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              placeholder="email@address.com"
              autoCapitalize="none"
            />
          </Fieldset>
        </FormWrapper.Body>
        <FormWrapper.Footer>
          <Form.Trigger asChild>
            <Button themeInverse>Update Email</Button>
          </Form.Trigger>
        </FormWrapper.Footer>
      </FormWrapper>
    </Form>
  )
}
