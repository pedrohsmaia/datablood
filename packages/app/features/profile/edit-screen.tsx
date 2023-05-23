import {
  Avatar,
  Button,
  Fieldset,
  Form,
  FormWrapper,
  FullscreenSpinner,
  Input,
  Label,
  useToastController,
} from '@my/ui'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { useState } from 'react'
import { UploadAvatar } from '../settings/components/upload-avatar'
import { useRouter } from 'solito/router'

export const EditProfileScreen = () => {
  const { profile, user } = useUser()

  if (!profile || !user?.id) {
    return <FullscreenSpinner />
  }
  return <EditProfileForm userId={user.id} initial={profile.name} />
}

const EditProfileForm = ({ initial, userId }: { initial: string | null; userId: string }) => {
  const [name, setName] = useState(initial ?? '')
  const supabase = useSupabase()
  const toast = useToastController()
  const queryClient = useQueryClient()
  const router = useRouter()
  const mutation = useMutation({
    async mutationFn() {
      await supabase.from('profiles').update({ name }).eq('id', userId)
    },
    async onSuccess() {
      toast.show('Successfully updated!')
      await queryClient.invalidateQueries(['profile'])
      router.back()
    },
  })

  return (
    <Form onSubmit={mutation.mutate} asChild>
      <FormWrapper maxWidth={600} mx="auto" width="100%">
        <UploadAvatar>
          <UserAvatar />
        </UploadAvatar>

        <FormWrapper.Body>
          <Fieldset>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              autoComplete="name"
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="John Doe"
            />
          </Fieldset>
        </FormWrapper.Body>

        <FormWrapper.Footer>
          <Form.Trigger asChild>
            <Button themeInverse> Update Profile</Button>
          </Form.Trigger>
        </FormWrapper.Footer>
      </FormWrapper>
    </Form>
  )
}

const UserAvatar = () => (
  <Avatar circular size={128}>
    <Avatar.Image source={{ uri: useUser().getAvatar(), width: 128, height: 128 }} />
  </Avatar>
)
