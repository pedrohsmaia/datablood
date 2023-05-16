import { ChangeEmailScreen } from 'app/features/settings/change-email-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Change Email',
        }}
      />
      <ChangeEmailScreen />
    </>
  )
}
