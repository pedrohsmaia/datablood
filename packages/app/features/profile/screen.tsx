import { Avatar, Button, H2, Paragraph, XStack, YStack } from '@my/ui'
import { Cog } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { useLink } from 'solito/link'

export function ProfileScreen() {
  const { profile, avatarUrl } = useUser()
  const name = profile?.name
  const about = profile?.about

  return (
    <YStack maxWidth={600} mx="auto" width="100%" f={1} p="$4" gap="$8">
      <YStack gap="$4">
        <XStack gap="$4" jc="space-between">
          <Avatar circular size={128}>
            <Avatar.Image source={{ uri: avatarUrl, width: 128, height: 128 }} />
          </Avatar>
          <Button
            scaleIcon={1.7}
            color="$color12"
            theme="alt2"
            {...useLink({ href: '/settings', replace: false })}
            icon={Cog}
            accessibilityLabel="Settings"
            circular
          />
        </XStack>
        <YStack gap="$2">
          <H2>{name}</H2>
          {!!about && <Paragraph>{about}</Paragraph>}
        </YStack>
      </YStack>
      <Button {...useLink({ href: '/profile/edit' })} themeInverse>
        Edit Profile
      </Button>
    </YStack>
  )
}
