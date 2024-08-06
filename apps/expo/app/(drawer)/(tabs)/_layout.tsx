import { type ColorTokens, useTheme } from '@my/ui'
import { DrawerActions } from '@react-navigation/native'
import { Home, Menu, Plus } from '@tamagui/lucide-icons'
// import { IconGearFill, IconGear, IconHouse, IconHouseFill } from '@tamagui-icons/icon-ph'
import { router, Stack, Tabs, useNavigation, usePathname } from 'expo-router'
import { Pressable } from 'react-native'

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
                navigation.dispatch(DrawerActions.openDrawer())
              }}
            >
              <Menu size={24} />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              style={{ marginRight: 10 }}
              onPress={() => {
                router.navigate('create')
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
            tabBarIcon: ({ size, color, focused }) => (
              <Home color={focused ? '$white1' : '$color10'} size={size} strokeWidth={2} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: true,
            title: 'Profile',
            tabBarIcon: ({ size, color, focused }) => (
              <Home color={color as ColorTokens} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}
