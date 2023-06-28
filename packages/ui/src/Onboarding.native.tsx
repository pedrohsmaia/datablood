import { useAnimatedNumber } from '@tamagui/animations-react-native'
import { useSafeAreaInsets } from 'app/utils/safe-area'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, ScrollView as RNScrollView } from 'react-native'
import {
  Circle,
  ScrollView,
  ScrollViewProps,
  TamaguiElement,
  Theme,
  ThemeName,
  XStack,
  YStack,
  useWindowDimensions,
} from 'tamagui'
import { OnboardingControls } from './OnboardingControls'
import { OnboardingProps } from './onboarding'

const { width: DEVICE_WIDTH } = Dimensions.get('screen')
export const Onboarding = ({ onOnboarded, steps }: OnboardingProps) => {
  const [stepIdx, _setStepIdx] = useState(0)
  // prevent a background to ever "continue" animation / try to continue where it left off - cause looks weird

  const [key, setKey] = useState(0)
  const currentStep = steps[stepIdx]!
  const stepsCount = steps.length

  const setStepIdx = (newIdx: number) => {
    if (stepIdx !== newIdx) {
      _setStepIdx(newIdx)
      setKey(key + 1)
    }
  }

  const handleScroll: ScrollViewProps['onScroll'] = (event) => {
    const val = event.nativeEvent.contentOffset.x / DEVICE_WIDTH
    const newIdx = Math.round(val)
    if (stepIdx !== newIdx) {
      setStepIdx(newIdx)
    }
  }

  const changePage = (newStepIdx: number) => {
    scrollRef.current?.scrollTo({ x: newStepIdx * DEVICE_WIDTH, animated: true })
  }

  const scrollRef = useRef<RNScrollView>(null)

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
          <Background />

          <ScrollView
            ref={scrollRef as unknown as React.Ref<TamaguiElement>}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
          >
            {steps.map((step, idx) => {
              const isActive = idx === stepIdx
              return (
                <YStack key={idx} width={DEVICE_WIDTH}>
                  {isActive && <step.Content key={idx} />}
                </YStack>
              )
            })}
          </ScrollView>

          <XStack gap={10} jc="center" my="$4">
            {Array.from(Array(stepsCount)).map((_, idx) => {
              const isActive = idx === stepIdx
              return <Point key={idx} active={isActive} onPress={() => setStepIdx(idx)} />
            })}
          </XStack>
          <OnboardingControls
            currentIdx={stepIdx}
            onChange={(val) => changePage(val)}
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
