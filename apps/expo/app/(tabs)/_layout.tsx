import { Avatar, Circle, type ColorTokens, Theme, YStack, validToken, useTheme } from '@my/ui'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Home, Plus, Settings } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import { Stack, Tabs, useNavigation } from 'expo-router'
import { Pressable } from 'react-native'
import { SolitoImage } from 'solito/image'
import { useRouter } from 'solito/router'

export default function Layout() {
  const { accentColor } = useTheme()
  const navigation = useNavigation()
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTintColor: accentColor.val,
          headerRight: ({}) => (
            <Pressable
              marginRight={12}
              onPress={() => {
                navigation.navigate('create')
              }}
            >
              <Plus size={24} />
            </Pressable>
          ),
        }}
      />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          headerTintColor: accentColor.val,
          tabBarActiveTintColor: accentColor.val,
          tabBarInactiveTintColor: accentColor.val,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            // tabBarBadge: 4,
            title: 'Home',
            tabBarIcon: ({ size, color }) => <Home col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ size, color }) => <Settings col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ size, color }) => <Settings col={color as ColorTokens} size={size} />,
          }}
        />
      </Tabs>
    </>
  )
}

type TabBarIconProps = Parameters<Exclude<BottomTabNavigationOptions['tabBarIcon'], undefined>>[0]

const ProfileTabIcon = ({ color, size }: TabBarIconProps) => {
  const { avatarUrl } = useUser()
  return (
    <YStack bw="$1" boc={validToken(color)} br="$10">
      <Avatar circular p="$1" size={size}>
        <SolitoImage src={avatarUrl} alt="your avatar" width={size} height={size} />
      </Avatar>
    </YStack>
  )
}
