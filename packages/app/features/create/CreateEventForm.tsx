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

const CreateEventSchema = z.object({
  name: formFields.text.min(10).describe('Name // Your post title'),
  description: formFields.textarea.describe('Description // Content of your post'),
  startTime: formFields.date.describe('Start Time // Start time of your event'),
  endTime: formFields.date.describe('End Time // End time of your event'),
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
    async mutationFn(data: z.infer<typeof CreateEventSchema>) {
      await supabase.from('events').insert({
        name: data.name.trim(),
        description: data.description,
        start_time: data.startTime.dateValue,
        end_time: data.endTime.dateValue,
        status: 'upcoming',
        profile_id: user?.id,
        created_at: new Date(),
        updated_at: new Date(),
      })
    },

    async onSuccess() {
      console.log('success')
      toast.show('Successfully created!')

      if (sm) {
        router.back()
      } else {
        setToggleCreateModal()
      }
      // await queryClient.invalidateQueries(['profile', user.id])
      // await apiUtils.greeting.invalidate()
      // router.back()
    },
  })

  if (!profile || !user?.id) {
    return <FullscreenSpinner />
  }

  return (
    <>
      <SchemaForm
        onSubmit={(values) => mutation.mutate(values)}
        schema={CreateEventSchema}
        defaultValues={{
          name: '',
          description: '',
          startTime: '',
          endTime: '',
        }}
        renderAfter={({ submit }) => (
          <Theme inverse>
            <SubmitButton onPress={() => submit()}>Create Event</SubmitButton>
          </Theme>
        )}
      >
        {(fields) => (
          <YStack
            gap="$2"
            py="$4"
            pb="$0"
            pt="$0"
            minWidth={400}
            maxWidth={400}
            $gtSm={{ minWidth: 480 }}
          >
            {Object.values(fields)}
          </YStack>
        )}
      </SchemaForm>
    </>
  )
}
