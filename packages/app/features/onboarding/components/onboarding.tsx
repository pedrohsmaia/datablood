import {
  AnimatePresence,
  Circle,
  Theme,
  ThemeName,
  XStack,
  YStack,
  useWindowDimensions,
} from '@my/ui'
import { useAnimatedNumber, useAnimatedNumberStyle } from '@tamagui/animations-react-native'
import { ArrowUp, Brush, CloudLightning, Lock, Rocket, Sparkles } from '@tamagui/lucide-icons'
import React, { useEffect, useState } from 'react'
import { Animated, PanResponder } from 'react-native'
import { OnboardingControls } from './controls'
import { StepContent } from './step-content'
import { useSafeAreaInsets } from 'app/utils/safe-area'

const steps = {
  0: {
    theme: 'orange',
    Content: () => (
      <StepContent
        title="Kickstart"
        icon={Sparkles}
        description="Auth, profile, settings, adaptive layouts and many more ready for you to build on top of"
      />
    ),
  },
  1: {
    theme: 'green',
    Content: () => (
      <StepContent
        title="Updates"
        icon={ArrowUp}
        description="As we make the starter better, we'll keep sending PRs with our GitHub app so your app keeps improving"
      />
    ),
  },
  2: {
    theme: 'blue',
    Content: () => (
      <StepContent
        title="Deploy"
        icon={Rocket}
        description="The Takeout starter is the best way to go from zero to deploy and target all platforms at the same time."
      />
    ),
  },
}
const AUTO_SWIPE_THRESHOLD = 15_000 // ms
export const Onboarding = ({
  onOnboarded,
  autoSwipe,
}: {
  onOnboarded?: () => void
  autoSwipe?: boolean
}) => {
  const [stepIdx, _setStepIdx] = useState(0)
  // prevent a background to ever "continue" animation / try to continue where it left off - cause looks weird

  const [key, setKey] = useState(0)
  const currentStep = steps[stepIdx as keyof typeof steps]
  const stepsCount = Object.keys(steps).length

  const setStepIdx = (newIdx: number) => {
    if (stepIdx !== newIdx) {
      _setStepIdx(newIdx)
      setKey(key + 1)
    }
  }

  useEffect(() => {
    if (autoSwipe) {
      const interval = setTimeout(() => {
        if (stepIdx >= stepsCount - 1) {
          setStepIdx(0)
        } else {
          setStepIdx(stepIdx + 1)
        }
      }, AUTO_SWIPE_THRESHOLD)
      return () => clearTimeout(interval)
    }
  }, [stepIdx, autoSwipe])

  const panResponder = React.useMemo(() => {
    return PanResponder.create({
      onMoveShouldSetPanResponderCapture: (e, gesture) => {
        const THRESHOLD = 100
        if (gesture.dx > THRESHOLD) {
          setStepIdx(Math.max(0, stepIdx - 1))
          return true
        } else if (gesture.dx < -THRESHOLD) {
          setStepIdx(Math.min(stepsCount - 1, stepIdx + 1))
          return true
        }
        return false
      },
    })
  }, [stepIdx])

  const safeAreaInsets = useSafeAreaInsets()

  return (
    <Theme name="light">
      <Theme name={currentStep.theme as ThemeName}>
        <YStack
          flex={1}
          backgroundColor="$color3"
          overflow="hidden"
          paddingBottom={safeAreaInsets.bottom}
          paddingRight={safeAreaInsets.right}
          paddingTop={safeAreaInsets.top}
          paddingLeft={safeAreaInsets.left}
        >
          <AnimatePresence>
            <Background key={key} />
          </AnimatePresence>

          <YStack f={1} {...panResponder.panHandlers}>
            <AnimatePresence>
              <currentStep.Content key={key} />
            </AnimatePresence>
          </YStack>

          <XStack gap={10} jc="center" my="$4">
            {Array.from(Array(stepsCount)).map((_, idx) => {
              const isActive = idx === stepIdx
              return <Point key={idx} active={isActive} onPress={() => setStepIdx(idx)} />
            })}
          </XStack>
          <OnboardingControls
            currentIdx={stepIdx}
            onChange={(val) => setStepIdx(val)}
            stepsCount={stepsCount}
            onFinish={onOnboarded}
          />
        </YStack>
      </Theme>
    </Theme>
  )
}

const Point = ({ active, onPress }: { active: boolean; onPress: () => void }) => {
  const animatedNumber = useAnimatedNumber(10)

  useEffect(() => {
    animatedNumber.setValue(active ? 30 : 10)
  }, [active])

  const animatedStyles = useAnimatedNumberStyle(animatedNumber, (val) => {
    'worklet'
    return {
      width: val,
    }
  })

  return (
    <Animated.View
      style={[
        {
          width: active ? 30 : 10,
          height: 10,
        },
        // TODO:
        // animatedStyles,
      ]}
      // @ts-ignore
      animation="100ms"
    >
      <Circle
        animation="100ms"
        onPress={onPress}
        backgroundColor={active ? '$color6' : '$color7'}
        width="100%"
        height="100%"
      />
    </Animated.View>
  )
}

export const Background = () => {
  const { height } = useWindowDimensions()
  return (
    <YStack pos="absolute" left={0} right={0} top={0} bottom={0} jc="center" ai="center">
      <Circle
        animation={'lazy'}
        x={0}
        y={0}
        opacity={1}
        scale={1}
        backgroundColor="$color8"
        enterStyle={{
          scale: 0,
        }}
        exitStyle={{
          scale: 10,
          opacity: 0,
        }}
        width={height * 3}
        height={height * 3}
      />
    </YStack>
  )
}
