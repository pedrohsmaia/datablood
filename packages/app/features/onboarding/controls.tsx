import { Button, Theme, XStack } from '@my/ui'
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'

export type OnboardingControlsProps = {
  currentIdx: number
  onChange: (newIdx: number) => void
  stepsCount: number
  onFinish?: () => void
}

export const OnboardingControls = ({
  currentIdx,
  onChange,
  stepsCount,
  onFinish,
}: OnboardingControlsProps) => {
  const handleGoNext = () => {
    if (currentIdx + 1 > stepsCount - 1) {
      onFinish()
      return
    }
    onChange(currentIdx + 1)
  }

  const handleGoPrev = () => {
    if (currentIdx - 1 < 0) {
      return
    }
    onChange(currentIdx - 1)
  }

  const handleSkip = () => {
    onFinish?.()
  }

  return (
    <>
      <XStack jc="space-between" ai="center" p="$5" gap="$5" $gtSm={{ display: 'none' }}>
        <Button chromeless color="$color1" borderRadius={100} onPress={() => handleSkip()}>
          Skip
        </Button>

        <Button
          chromeless
          bordered
          borderColor="$color1"
          f={1}
          borderRadius={100}
          color="$color1"
          onPress={() => handleGoNext()}
          iconAfter={ChevronRight}
        >
          Continue
        </Button>
      </XStack>
      {/* bigger screens: */}
      <XStack
        jc="space-between"
        ai="center"
        p="$5"
        gap="$5"
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
        $sm={{ display: 'none' }}
      >
        <Button
          chromeless
          f={1}
          borderRadius={100}
          circular
          onPress={() => handleGoPrev()}
          iconAfter={ChevronLeft}
        />
        <Button
          chromeless
          f={1}
          borderRadius={100}
          circular
          onPress={() => handleGoNext()}
          iconAfter={ChevronRight}
        />
      </XStack>
    </>
  )
}
