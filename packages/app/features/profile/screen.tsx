import {
  Avatar,
  Button,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  ScrollView,
  Settings,
  XStack,
  YStack,
  getTokens,
} from '@my/ui'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Box, Cog, Milestone, ShoppingCart, Users, User } from '@tamagui/lucide-icons'
import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import { useUser } from 'app/utils/useUser'
import { SolitoImage } from 'solito/image'
import { Link, useLink } from 'solito/link'

export function ProfileScreen(props) {
  const { profile, avatarUrl } = useUser()
  const name = profile?.name
  const about = profile?.about

  const insets = useSafeAreaInsets()
  return (
    <DrawerContentScrollView {...props}>
      <YStack maw={600} mx="auto" w="100%" f={1}>
        <YStack gap="$4" mb="$4">
          <XStack gap="$2" jc="center" $sm={{ mt: '$4' }}>
            <Avatar circular size="$7">
              <SolitoImage
                src={avatarUrl}
                alt="your avatar"
                width={getTokens().size['7'].val}
                height={getTokens().size['7'].val}
              />
            </Avatar>
          </XStack>
          <YStack gap="$2">
            {name ? (
              <H4 ta="center">{name}</H4>
            ) : (
              <Link href="/profile/edit?edit_name=1">
                <H2 ta="center">No Name</H2>
              </Link>
            )}

            {!!about && (
              <Paragraph theme="alt1" ta="center" size="$4">
                {about}
              </Paragraph>
            )}
          </YStack>
        </YStack>
        <Settings>
          <Settings.Items>
            <Settings.Group>
              <Settings.Item icon={User} {...useLink({ href: '/profile/edit' })} accentTheme="pink">
                Edit profile
              </Settings.Item>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={Box} accentTheme="green">
                My Items
              </Settings.Item>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={Users} accentTheme="orange">
                Refer Your Friends
              </Settings.Item>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={Milestone} accentTheme="gray">
                Address Info
              </Settings.Item>
              {/* dummy item - doesn't lead anywhere */}
              <Settings.Item icon={ShoppingCart} accentTheme="blue">
                Purchase History
              </Settings.Item>
              <Settings.Item {...useLink({ href: '/settings' })} icon={Cog}>
                Settings
              </Settings.Item>
            </Settings.Group>
          </Settings.Items>
        </Settings>
      </YStack>
    </DrawerContentScrollView>
  )
}
