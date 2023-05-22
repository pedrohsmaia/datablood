import { Avatar, Button, Paragraph, YStack } from '@my/ui'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { useLink } from 'solito/link'
import { UploadAvatar } from '../settings/components/upload-avatar'

export function ProfileScreen() {
  const { user } = useUser()
  const email = user?.email

  return (
    <YStack f={1} $gtMd={{ flexDirection: 'row' }} gap="$2" p="$4" jc="space-between">
      <YStack gap="$4">
        <UploadAvatar>
          <UserAvatar />
        </UploadAvatar>
        <YStack>
          <Paragraph>{email}</Paragraph>
        </YStack>
      </YStack>
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
