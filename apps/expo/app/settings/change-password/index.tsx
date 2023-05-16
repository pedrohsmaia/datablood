import { ChangePasswordScreen } from 'app/features/settings/change-password-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Change Password',
        }}
      />
      <ChangePasswordScreen />
    </>
  )
}
