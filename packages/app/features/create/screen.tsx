import {
  FullscreenSpinner,
  H2,
  Paragraph,
  SubmitButton,
  Theme,
  Toast,
  YStack,
  isWeb,
  useToastController,
} from '@my/ui'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { toast } from 'burnt'
import { useRouter } from 'solito/router'
import { z } from 'zod'

import { api } from '../../utils/api'

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
  const toast = useToastController()
  const router = useRouter()
  const apiUtils = api.useUtils()
  const { profile, user } = useUser()
  const supabase = useSupabase()
  const queryClient = useQueryClient()
  const mutation = useMutation({
    async onError(error) {
      console.log('error', error)
    },
    async mutationFn(data: z.infer<typeof CreateTaskSchema>) {
      await supabase.from('projects').insert({
        name: data.title,
        number_of_days: data.numOfDays,
        description: data.description,
        paid_project: data.paidProject,
        project_type: data.type,
        profile_id: user?.id,
      })
    },

    async onSuccess() {
      console.log('success')
      toast.show('Successfully created!')
      // await queryClient.invalidateQueries(['profile', user.id])
      // await apiUtils.greeting.invalidate()
      // router.back()
    },
  })

  if (!profile || !user?.id) {
    return <FullscreenSpinner />
  }

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
