import { ProfileScreen } from '@my/app/features/profile/screen.native'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
      <ProfileScreen />
    </>
  )
}
