import { OnboardingScreen } from 'app/features/onboarding/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <OnboardingScreen />
    </>
  )
}
