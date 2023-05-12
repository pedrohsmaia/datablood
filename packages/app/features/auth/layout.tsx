import { XStack, YStack } from '@my/ui'
import { Onboarding } from '../onboarding/onboarding'

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <XStack f={1}>
      <YStack f={2} fb={0}>
        {children}
      </YStack>

      <YStack $sm={{ display: 'none' }} f={3} fb={0}>
        <Onboarding autoSwipe  />
      </YStack>
    </XStack>
  )
}
