import { H2, Paragraph, SubmitButton, Theme, YStack, isWeb } from '@my/ui'
import { useMutation } from '@tanstack/react-query'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { z } from 'zod'

const CreateTaskSchema = z.object({
  title: formFields.text.min(10).describe("Name // Your project's name"),
  description: formFields.textarea.describe(
    'Description // I need a mobile app for this one customer...'
  ),
  numOfDays: formFields.number.min(2).max(200).describe('Number of Days // 60 '),
  paidProject: formFields.boolean.describe('Paid Project'),
  billingAddress: formFields.address.describe('Billing Address'),
  type: formFields.select.describe('Project Type'),
})
export const CreateScreen = () => {
  const { profile, user } = useUser()
  const supabase = useSupabase()
  const mutation = useMutation({
    async mutationFn(data: z.infer<typeof CreateTaskSchema>) {
      await supabase
        .from('posts')
        .create({ title: data.title, description: data.description, userId })
    },

    async onSuccess() {
      toast.show('Successfully updated!')
      await queryClient.invalidateQueries(['profile', userId])
      await apiUtils.greeting.invalidate()
      router.back()
    },
  })

  return (
    <SchemaForm
      onSubmit={(values) => mutation.mutate(values)}
      schema={CreateTaskSchema}
      defaultValues={{
        title: '',
        description: '',
        numOfDays: 10,
        paidProject: false,
        billingAddress: {
          street: '',
          zipCode: '',
        },
        type: 'code',
      }}
      props={{
        type: {
          options: [
            {
              name: 'Code',
              value: 'code',
            },
            {
              name: 'Design',
              value: 'design',
            },
            {
              name: 'Consulting',
              value: 'consulting',
            },
          ],
        },
      }}
      renderAfter={({ submit }) => (
        <Theme inverse>
          <SubmitButton onPress={() => submit()}>Create</SubmitButton>
        </Theme>
      )}
    >
      {(fields) => (
        <>
          <YStack gap="$2" py="$4" pb="$0" pt="$0">
            {isWeb && <H2 ta="center">New Project</H2>}
          </YStack>
          {Object.values(fields)}
        </>
      )}
    </SchemaForm>
  )
}
