import { Button, H2, SchemaForm, YStack, formFields, useToastController } from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { z } from 'zod'

const ChangePasswordSchema = z
  .object({
    password: formFields.text.min(6).describe('New Password // Enter your new password'),
    passwordConfirm: formFields.text.min(6).describe('Confirm Password // Repeat your password'),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        path: ['passwordConfirm'],
        code: 'custom',
        message: 'The passwords did not match',
      })
    }
  })

export const ChangePasswordScreen = () => {
  const supabase = useSupabase()
  const toast = useToastController()

  const handleChangePassword = async ({ password }) => {
    const { data, error } = await supabase.auth.updateUser({ password })
    if (error) {
      toast.show(error.message)
    } else {
      toast.show('Successfully updated!')
    }
  }

  return (
    <SchemaForm
      onSubmit={handleChangePassword}
      schema={ChangePasswordSchema}
      defaultValues={{
        password: '',
        passwordConfirm: '',
      }}
      props={{
        password: {
          secureTextEntry: true,
        },
        passwordConfirm: {
          secureTextEntry: true,
        },
      }}
      renderBefore={() => (
        <YStack p="$4">
          <H2>Change Password</H2>
        </YStack>
      )}
      renderAfter={({ submit }) => (
        <Button onPress={() => submit()} themeInverse>
          Update Password
        </Button>
      )}
    />
  )
}
