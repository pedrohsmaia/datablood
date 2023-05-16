import { Avatar, Button, H2, Paragraph, YStack } from '@my/ui'
import { Upload } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { useLink } from 'solito/link'

export function ProfileScreen() {
  const { user } = useUser()
  const email = user.email
  const firstName = user?.user_metadata.first_name
  const lastName = user?.user_metadata.lastName

  return (
    <YStack f={1} p="$4" space jc="space-between">
      <YStack gap="$4">
        <UploadAvatar>
          <UserAvatar />
        </UploadAvatar>
        <YStack>
          <H2>
            {firstName} {lastName}
          </H2>
          <Paragraph>{email}</Paragraph>
        </YStack>
        <Button {...useLink({ href: '/profile/edit' })}>Edit Profile</Button>
        <Button {...useLink({ href: '/settings' })}>Settings</Button>
      </YStack>
    </YStack>
  )
}

const UserAvatar = () => {
  const { user } = useUser()

  const avatar =
    user?.user_metadata.avatar_url ??
    `https://ui-avatars.com/api/?name=${firstName ?? user?.email ?? ''}`

  return (
    <Avatar circular size="$10">
      <Avatar.Image source={{ uri: avatar, width: 100, height: 100 }} />
    </Avatar>
  )
}

const UploadAvatar = ({ children }: { children: React.ReactNode }) => {
  return (
    <YStack
      position="relative"
      alignSelf="flex-start"
      flexShrink={1}
      onPress={() => console.log('hi')}
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
      >
        <YStack
          backgroundColor="black"
          opacity={0.3}
          position="absolute"
          left={0}
          right={0}
          top={0}
          bottom={0}
        />
        <Upload />
      </YStack>
    </YStack>
  )
}
