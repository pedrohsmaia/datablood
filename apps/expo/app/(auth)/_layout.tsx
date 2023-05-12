import { AuthLayout } from 'app/features/auth/layout'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <AuthLayout>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Stack />
    </AuthLayout>
  )
}
