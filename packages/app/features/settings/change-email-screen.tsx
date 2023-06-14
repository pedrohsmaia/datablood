import {
  Button,
  Fieldset,
  H2,
  Input,
  Label,
  SchemaForm,
  formFields,
  useToastController,
} from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { z } from 'zod'

const ChangeEmailSchema = z.object({
  email: formFields.email.describe('New Email // email@adderss.com'),
})

export const ChangeEmailScreen = () => {
  const { user } = useUser()
  const supabase = useSupabase()
  const toast = useToastController()

  const handleChangePassword = async ({ email }: z.infer<typeof ChangeEmailSchema>) => {
    const { data, error } = await supabase.auth.updateUser({ email })
    if (error) {
      toast.show(error.message)
    } else {
      toast.show('Check your inbox', {
        message: `We sent you a confirmation email to ${data.user.new_email}.`,
      })
      await supabase.auth.refreshSession()
    }
  }

  return (
    <SchemaForm
      onSubmit={handleChangePassword}
      schema={ChangeEmailSchema}
      renderBefore={() => <H2>Change Email</H2>}
      header={
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
      }
      renderAfter={({ submit }) => (
        <Button onPress={() => submit()} themeInverse>
          Update Email
        </Button>
      )}
    />
  )
}
