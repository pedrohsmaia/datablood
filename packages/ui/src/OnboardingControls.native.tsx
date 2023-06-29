import { Button, XStack } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { OnboardingControlsProps } from './OnboardingControls'

export const OnboardingControls = ({
  currentIdx,
  onChange,
  stepsCount,
  onFinish,
}: OnboardingControlsProps) => {
  const handleGoNext = () => {
    if (currentIdx + 1 > stepsCount - 1) {
      onFinish?.()
      return
    }
    onChange(currentIdx + 1)
  }

  const handleSkip = () => {
    onFinish?.()
  }

  return (
    <XStack jc="space-between" ai="center" p="$5" gap="$5" $gtSm={{ display: 'none' }}>
      <Button
        chromeless
        color="$color1"
        pressStyle={{
          backgroundColor: '$color7',
        }}
        borderRadius="$10"
        onPress={() => handleSkip()}
      >
        Skip
      </Button>

      <Button
        pressStyle={{
          backgroundColor: '$color7',
          borderColor: '$color7',
        }}
        chromeless
        bordered
        borderColor="$color1"
        f={1}
        borderRadius="$10"
        color="$color1"
        onPress={() => handleGoNext()}
        iconAfter={ChevronRight}
      >
        Continue
      </Button>
    </XStack>
  )
}
