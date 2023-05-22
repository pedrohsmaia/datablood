import { Avatar, Button, YStack } from '@my/ui'
import { Cog, Home, Plus, User } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import type { HomeLayoutProps } from './layout'
import { useLink } from 'solito/link'
import { useUser } from 'app/utils/useUser'

export const HomeLayout = ({}: HomeLayoutProps) => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="_create"
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault()
              navigation.navigate('create')
            },
          })}
          options={{
            title: 'New',
            tabBarIcon: ({ size, focused }) => (
              <YStack
                backgroundColor='$blue9'
                padding="$4"
                borderRadius={100}
                pos="absolute"
                bottom={0}
              >
                <Plus color="white" size={size + 10} />
              </YStack>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => {
              const { getAvatar } = useUser()
              return (
                <Avatar borderWidth="$1" borderColor={color} size={size} circular>
                  <Avatar.Image source={{ uri: getAvatar() }} />
                </Avatar>
              )
            },
            headerShown: true,
            headerRight() {
              return (
                <Button
                  chromeless
                  {...useLink({ href: '/settings' })}
                  icon={<Cog />}
                  accessibilityLabel="Settings"
                  borderRadius={0}
                />
              )
            },
          }}
        />
      </Tabs>
    </>
  )
}
