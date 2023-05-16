import { Button, H2, Paragraph, XStack, YStack } from '@my/ui'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const { profile, user, logOut } = useUser()

  return (
    <YStack f={1} p="$4" space>
      <H2>{profile?.first_name ? `Welcome, ${profile?.first_name}!` : 'Welcome!'}</H2>
    </YStack>
  )
}
