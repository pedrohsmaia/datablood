import { Avatar, Button, H1, H2, Paragraph, XStack, YStack } from '@my/ui'
import { Cog } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { useLink } from 'solito/link'

export function ProfileScreen() {
  const { user, profile, getAvatar } = useUser()
  const name = profile?.name
  const email = user?.email

  return (
    <YStack f={1} p="$4" gap='$8'>
      <YStack gap="$4">
        <XStack gap="$4" jc="space-between">
          <Avatar circular size={128}>
            <Avatar.Image source={{ uri: getAvatar(), width: 128, height: 128 }} />
          </Avatar>
          <Button
            {...useLink({ href: '/settings' , replace: false})}
            icon={<Cog />}
            accessibilityLabel="Settings"
            circular
          />
        </XStack>
        <YStack gap="$2">
          <H2>{name}</H2>
          <Paragraph>{email}</Paragraph>
        </YStack>
      </YStack>
      <Button {...useLink({ href: '/profile/edit' })} themeInverse>
        Edit Profile
      </Button>
    </YStack>
  )
}
