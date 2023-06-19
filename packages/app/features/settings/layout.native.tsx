import { HeaderBackButton } from '@react-navigation/elements'
import { Stack } from 'expo-router'
import { useRouter } from 'solito/router'
import type { SettingsLayoutProps } from './layout'
import { Platform } from 'react-native'

export const SettingsLayout = ({}: SettingsLayoutProps) => {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Settings',
          // for some reason, the back button appears on android but not ios - temporary fix:
          headerLeft:
            Platform.OS === 'ios'
              ? () => <HeaderBackButton onPress={() => router.back()} label="Back" />
              : undefined,
        }}
      />
      <Stack.Screen
        name="general"
        options={{
          title: 'General',
        }}
      />
      <Stack.Screen
        name="change-email"
        options={{
          title: 'Change Email',
        }}
      />
      <Stack.Screen
        name="change-password"
        options={{
          title: 'Change Password',
        }}
      />
    </Stack>
  )
}
