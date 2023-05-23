import { HeaderBackButton } from '@react-navigation/elements'
import { Stack } from 'expo-router'
import { useRouter } from 'solito/router'
import type { SettingsLayoutProps } from './layout'

export const SettingsLayout = ({}: SettingsLayoutProps) => {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Settings',
          headerLeft: () => <HeaderBackButton onPress={() => router.back()} a label="Back" />,
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
