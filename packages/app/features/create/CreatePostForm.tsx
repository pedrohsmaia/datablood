import { FullscreenSpinner, SubmitButton, Theme, YStack, useToastController } from '@my/ui'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { useRouter } from 'solito/router'
import { z } from 'zod'

import { api } from '../../utils/api'

const CreatePostSchema = z.object({
  title: formFields.text.min(10).describe('Name // Your post title'),
  content: formFields.textarea.describe('Description // Content of your post'),
  category_id: formFields.select.describe('Category // Category of your post'),
  image_url: formFields.image.describe('Image URL // Image URL of your post'),
})

export const CreatePostForm = () => {
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
    async mutationFn(data: z.infer<typeof CreatePostSchema>) {
      await supabase.from('posts').insert({
        title: data.title,
        content: data.content,
        category_id: data.category_id,
        image_url: data.image_url.imageSource,
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
    <>
      <SchemaForm
        onSubmit={(values) => mutation.mutate(values)}
        schema={CreatePostSchema}
        defaultValues={{
          title: '',
          content: '',
          category_id: '3b145e4a-9654-4c23-b0fc-d81c48729e67',
        }}
        props={{
          category_id: {
            options: [
              {
                name: 'React',
                value: '3b145e4a-9654-4c23-b0fc-d81c48729e67',
              },
              {
                name: 'Tamagui',
                value: 'e5e7769b-73c0-4888-aded-a69870b8f0e1',
              },
            ],
          },
        }}
        renderAfter={({ submit }) => (
          <Theme inverse>
            <SubmitButton onPress={() => submit()}>Create Post</SubmitButton>
          </Theme>
        )}
      >
        {(fields) => (
          <YStack gap="$2" py="$4" pb="$0" pt="$0" minWidth={400} maxWidth={400}>
            {Object.values(fields)}
          </YStack>
        )}
      </SchemaForm>
    </>
  )
}
