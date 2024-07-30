import { Avatar, Circle, type ColorTokens, Theme, YStack, validToken, useTheme } from '@my/ui'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Home, Plus, Settings, Menu } from '@tamagui/lucide-icons'
// import { IconGearFill, IconGear, IconHouse, IconHouseFill } from '@tamagui-icons/icon-ph'
import { useUser } from 'app/utils/useUser'
import { Stack, Tabs, usePathname, useNavigation } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { Pressable } from 'react-native'
import { SolitoImage } from 'solito/image'

export default function Layout() {
  const { accentColor } = useTheme()
  const navigation = useNavigation()
  const pathname = usePathname()
  if (__DEV__) {
    console.log('pathname', pathname)
  }
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerShown: pathname === '/' || pathname === '/create',
          headerTintColor: accentColor.val,
          headerLeft: () => (
            <Pressable
              style={{ marginLeft: 10 }}
              onPress={() => {
                navigation.openDrawer()
              }}
            >
              <Menu size={24} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={{ marginRight: 10 }}
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
          headerTintColor: accentColor.val,
          tabBarActiveTintColor: accentColor.val,
          tabBarInactiveTintColor: accentColor.val,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ size, color, focused }) =>
              focused ? (
                <Home color={color as ColorTokens} size={size} />
              ) : (
                <Home color={color as ColorTokens} size={size} />
              ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: true,
            title: 'Profile',
            tabBarIcon: ({ size, color, focused }) =>
              focused ? (
                <Settings color={color as ColorTokens} size={size} />
              ) : (
                <Settings color={color as ColorTokens} size={size} />
              ),
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
