import {
  Avatar,
  Button,
  Fieldset,
  Form,
  FormWrapper,
  FullscreenSpinner,
  Input,
  Label,
  TextArea,
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
  return <EditProfileForm userId={user.id} initial={{ name: profile.name, about: profile.about }} />
}

const EditProfileForm = ({
  initial,
  userId,
}: {
  initial: { name: string | null; about: string | null }
  userId: string
}) => {
  const [name, setName] = useState(initial.name ?? '')
  const [about, setAbout] = useState(initial.about ?? '')
  const supabase = useSupabase()
  const toast = useToastController()
  const queryClient = useQueryClient()
  const router = useRouter()
  const mutation = useMutation({
    async mutationFn() {
      await supabase.from('profiles').update({ name, about }).eq('id', userId)
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
          <Fieldset>
            <Label htmlFor="about">About</Label>
            <TextArea
              numberOfLines={4}
              id="about"
              onChangeText={(text) => setAbout(text)}
              value={about}
              placeholder="Tell us a bit about yourself..."
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

const UserAvatar = () => {
  const { avatarUrl } = useUser()
  return (
    <Avatar circular size={128}>
      <Avatar.Image source={{ uri: avatarUrl, width: 128, height: 128 }} />
    </Avatar>
  )
}
