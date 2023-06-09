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
import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import { UploadAvatar } from '../settings/components/upload-avatar'
import { SolitoImage } from 'solito/image'

const { useParams } = createParam<{ edit_name?: '1'; edit_about?: '1' }>()
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
  const { params } = useParams()
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
              autoFocus={!!params?.edit_name}
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
              autoFocus={!!params?.edit_about}
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
      <SolitoImage src={avatarUrl} alt="your avatar" width={128} height={128} />
    </Avatar>
  )
}
