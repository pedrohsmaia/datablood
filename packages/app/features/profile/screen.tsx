import { Avatar, Button, H2, Paragraph, YStack, getVariable, getVariableValue } from '@my/ui'
import { Upload } from '@tamagui/lucide-icons'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { decode } from 'base64-arraybuffer'
import * as ImagePicker from 'expo-image-picker'
import React from 'react'
import { useLink } from 'solito/link'

export function ProfileScreen() {
  const { user } = useUser()
  const email = user?.email

  return (
    <YStack f={1} gap="$2" p="$4" jc="space-between">
      <YStack gap="$4">
        <UploadAvatar>
          <UserAvatar />
        </UploadAvatar>
        <YStack>
          <Paragraph>{email}</Paragraph>
        </YStack>
      </YStack>
      <Button color="$color1" themeInverse {...useLink({ href: '/settings' })}>
        Settings
      </Button>
    </YStack>
  )
}

const UserAvatar = () => {
  const { getAvatar } = useUser()

  return (
    <Avatar circular size={128}>
      <Avatar.Image source={{ uri: getAvatar(), width: 128, height: 128 }} />
    </Avatar>
  )
}

const UploadAvatar = ({ children }: { children: React.ReactNode }) => {
  const { user, updateProfile } = useUser()
  const supabase = useSupabase()
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    })

    uploadImage(result)
  }

  const uploadImage = async (pickerResult: ImagePicker.ImagePickerResult) => {
    try {
      if (pickerResult.canceled) {
        alert('Upload canceled')
        return
      } else {
        if (!user) return
        const image = pickerResult.assets[0]
        if (!image) {
          throw new Error('No image provided.')
        }

        const base64Image = image.base64

        if (!base64Image) {
          throw new Error('No image provided.')
        }

        const base64Str = base64Image.includes('base64,')
          ? base64Image.substring(base64Image.indexOf('base64,') + 'base64,'.length)
          : base64Image
        const res = decode(base64Str)

        if (!(res.byteLength > 0)) {
          console.error('ArrayBuffer is null')
          return null
        }
        const result = await supabase.storage
          .from('avatars')
          .upload(`${user.id}/${Number(new Date())}.jpeg`, res, {
            contentType: 'image/jpeg',
            upsert: true,
          })
        if (result.error) {
          console.log(result.error)
          throw new Error(result.error.message)
        }

        const publicUrlRes = await supabase.storage
          .from('avatars')
          .getPublicUrl(result.data.path.replace(`avatars/`, ''))

        await supabase
          .from('profiles')
          .update({ avatar_url: publicUrlRes.data.publicUrl })
          .eq('id', user.id)
        await updateProfile()
      }
    } catch (e) {
      console.error(e)
      alert('Upload failed')
    }
  }

  return (
    <YStack
      position="relative"
      alignSelf="flex-start"
      flexShrink={1}
      onPress={() => pickImage()}
      cursor="pointer"
    >
      {children}
      <YStack
        position="absolute"
        left={0}
        right={0}
        top={0}
        bottom={0}
        jc="center"
        ai="center"
        borderRadius={100}
        zIndex={100}
      >
        <YStack opacity={0.3} position="absolute" left={0} right={0} top={0} bottom={0} />
        <Upload color="$color1" />
      </YStack>
    </YStack>
  )
}
