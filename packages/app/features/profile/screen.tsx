import {
  Avatar,
  Button,
  Card,
  CardProps,
  H1,
  H2,
  H3,
  ListItem,
  Paragraph,
  ScrollView,
  SizableText,
  Theme,
  XStack,
  YGroup,
  YStack,
  getTokens,
} from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Cog, Milestone, Wallet, ShoppingCart, User, Users } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import React from 'react'
import { SolitoImage } from 'solito/image'
import { Link, useLink } from 'solito/link'
import { Settings } from '../settings/components/settings'
import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'

export function ProfileScreen() {
  const { profile, avatarUrl } = useUser()
  const name = profile?.name
  const about = profile?.about

  const insets = useSafeAreaInsets()
  return (
    <ScrollView>
      <YStack
        maxWidth={600}
        mx="auto"
        width="100%"
        f={1}
        p="$4"
        gap="$8"
        pb={insets.bottom + 20}
        pt={insets.top + 10}
      >
        <YStack gap="$4">
          <XStack gap="$4" jc="center" $sm={{ mt: '$8' }}>
            <Avatar circular size="$14">
              <SolitoImage
                src={avatarUrl}
                alt="your avatar"
                width={getTokens().size['$14'].val}
                height={getTokens().size['$14'].val}
              />
            </Avatar>
          </XStack>
          <YStack gap="$2">
            {name ? (
              <H1 ta="center">{name}</H1>
            ) : (
              <Link href="/profile/edit?edit_name=1">
                <H1 ta="center" textDecorationLine="underline">
                  No Name
                </H1>
              </Link>
            )}

            {!!about && (
              <Paragraph ta="center" size="$6">
                {about}
              </Paragraph>
            )}
          </YStack>
        </YStack>
        <Button {...useLink({ href: '/profile/edit' })} size="$6" themeInverse>
          Edit Profile
        </Button>

        <Settings>
          <Settings.Items>
            <Settings.Group>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={Milestone} accentColor="$green9">
                My Posts
              </Settings.Item>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={Users} accentColor="$orange9">
                Refer Your Friends
              </Settings.Item>
            </Settings.Group>

            <Settings.Group>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={Milestone} accentColor="$blue9">
                Address Info
              </Settings.Item>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={ShoppingCart} accentColor="$blue9">
                Purchase History
              </Settings.Item>
            </Settings.Group>

            <Settings.Group>
              <Settings.Item icon={Cog} href="/settings" accentColor="$gray9">
                Settings
              </Settings.Item>
            </Settings.Group>
          </Settings.Items>
        </Settings>
      </YStack>
    </ScrollView>
  )
}
