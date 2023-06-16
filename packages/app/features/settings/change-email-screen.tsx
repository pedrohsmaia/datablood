import {
  Button,
  Fieldset,
  H2,
  Input,
  Label,
  SchemaForm,
  YStack,
  formFields,
  useToastController,
} from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { z } from 'zod'

const ChangeEmailSchema = z.object({
  email: formFields.text.email().describe('New Email // email@adderss.com'),
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
      renderBefore={() => (
        <YStack p="$4">
          <H2>Change Email</H2>
        </YStack>
      )}
      defaultValues={{
        email: '',
      }}
      header={
        <Fieldset>
          <Label theme="alt1" htmlFor="current-email">
            Current Email
          </Label>
          <Input
            disabled
            opacity={0.8}
            cursor="not-allowed"
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
