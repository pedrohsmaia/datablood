import { YStack } from '@my/ui'
import { Plus, Home, User } from '@tamagui/lucide-icons'
import { Stack, Tabs } from 'expo-router'
import { Appearance } from 'react-native'

export default function Layout(props) {
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
          name="cta"
          options={{
            title: 'New',
            tabBarIcon: ({ color, size }) => (
              <CtaTabBarContainer>
                <Plus size={size} />
              </CtaTabBarContainer>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          }}
        />
      </Tabs>
    </>
  )
}

const CtaTabBarContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <YStack backgroundColor="$blue8" padding="$4" borderRadius="$10" pos="absolute" bottom={0}>
      {children}
    </YStack>
  )
}
