import { Button, Paragraph, XStack, YStack } from '@my/ui'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const { profile, user, logOut } = useUser()

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <XStack>
        <Paragraph>
          {profile?.first_name ? `Welcome, ${profile?.first_name}!` : 'Welcome!'}
        </Paragraph>
      </XStack>
      <Button {...useLink({ href: '/settings' })}>Settings</Button>
      <Button onPress={() => logOut()}>Logout</Button>
    </YStack>
  )
}
