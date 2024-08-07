import { useTheme } from '@my/ui'
import { DrawerActions } from '@react-navigation/native'
import { Home, Menu, Plus, User } from '@tamagui/lucide-icons'
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
          tabBarShowLabel: true,
          headerTintColor: accentColor.val,
          tabBarStyle: {
            marginTop: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          key={'index'}
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ size, color, focused }) => (
              <Home color={focused ? '$white1' : '$color10'} size={size} strokeWidth={2} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          key={'profile'}
          options={{
            headerShown: false,
            title: 'Profile',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ size, color, focused }) => (
              <User color={focused ? '$white1' : '$color10'} size={size} strokeWidth={2} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}
