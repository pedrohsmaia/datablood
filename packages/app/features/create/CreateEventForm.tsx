import { Database } from '@my/supabase/types'
import {
  FullscreenSpinner,
  SubmitButton,
  Theme,
  YStack,
  useMedia,
  useToastController,
} from '@my/ui'
import { useMutation } from '@tanstack/react-query'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useGlobalStore } from 'app/utils/global-store'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { useRouter } from 'solito/router'
import { z } from 'zod'

type InsertEvent = Database['public']['Tables']['events']['Insert']

const CreateEventFormSchema = z.object({
  name: formFields.text.min(5).describe('Name // Your event name').nullable().optional(),
  description: formFields.textarea.describe('Description // Content of your event').nullable(),
  start_time: formFields.date.describe('Start Time // Start time of your event').nullable(),
  end_time: formFields.date.describe('End Time // End time of your event').nullable(),
  status: formFields.select.describe('Status // Status of your event'),
})

export const CreateEventForm = () => {
  const { setToggleCreateModal } = useGlobalStore()
  const { sm } = useMedia()
  const toast = useToastController()
  const router = useRouter()
  const { profile, user } = useUser()
  const supabase = useSupabase()
  const mutation = useMutation({
    async onError(error) {
      console.log('error', error)
    },
    async mutationFn(data: z.infer<typeof CreateEventFormSchema>) {
      const { name, description, start_time, end_time, status } = data
      const insertData: InsertEvent = {
        name: name?.trim() as string,
        description,
        start_time: start_time?.dateValue?.toISOString(),
        end_time: end_time?.dateValue?.toISOString(),
        status,
      }
      await supabase.from('events').insert(insertData)
    },

    async onSuccess() {
      console.log('success')
      toast.show('Successfully created!')

      if (sm) {
        router.back()
      } else {
        setToggleCreateModal()
      }
    },
  })

  if (!profile || !user?.id) {
    return <FullscreenSpinner />
  }

  return (
    <>
      <SchemaForm
        onSubmit={(values) => mutation.mutate(values)}
        schema={CreateEventFormSchema}
        defaultValues={{
          name: '',

          description: '',
          start_time: {
            dateValue: new Date(),
          },
          end_time: {
            dateValue: new Date(),
          },
        }}
        props={{
          status: {
            placeholder: 'Set status',
            options: [
              {
                name: 'Upcoming',
                value: 'upcoming',
              },
              {
                name: 'Live',
                value: 'live',
              },
              {
                name: 'Past',
                value: 'past',
              },
            ],
          },
        }}
        renderAfter={({ submit }) => (
          <Theme inverse>
            <SubmitButton onPress={() => submit()}>Create Event</SubmitButton>
          </Theme>
        )}
      >
        {(fields) => (
          <YStack gap="$2" py="$4" pb="$0" pt="$0" minWidth="100%" $gtSm={{ minWidth: 480 }}>
            {Object.values(fields)}
          </YStack>
        )}
      </SchemaForm>
    </>
  )
}
