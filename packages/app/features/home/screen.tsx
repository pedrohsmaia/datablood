import { Button, H1, Paragraph, XStack, YStack } from '@my/ui'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const { profile, user, logOut } = useUser()
  const linkProps = useLink({
    href: '/login',
  })

  const supabase = useSupabase()
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <XStack>
        <Paragraph>
          {profile?.first_name ? `Welcome, ${profile?.first_name}!` : 'Welcome!'} {user?.email}
        </Paragraph>
      </XStack>
      <Button onPress={() => logOut()}>Logout</Button>
      <Button {...linkProps}>Login</Button>
    </YStack>
  )
}
