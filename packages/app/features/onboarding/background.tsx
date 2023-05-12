import { Circle, YStack, styled } from '@my/ui'
import { useWindowDimensions } from 'react-native'


export const Background = () => {
  const { height } = useWindowDimensions()
  return (
    <>
      <YStack pos="absolute" left={0} right={0} top={0} bottom={0} jc="center" ai="center">
        <Circle
          animation={'lazy'}
          x={0}
          y={0}
          opacity={1}
          scale={1}
          backgroundColor={'$color8'}
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
      {/* <YStack pos="absolute" right={0} top={0}>
              <CloudPart
                enterStyle={{
                  scale: 0,
                  x: 100,
                  y: 100,
                }}
                exitStyle={{
                  scale: 0,
                  x: 100,
                  y: 100,
                }}
                width={300}
                height={300}
              />
            </YStack>
            <YStack pos="absolute" left={0} top={0}>
              <CloudPart
                enterStyle={{
                  scale: 0,
                  x: -100,
                  y: -100,
                }}
                exitStyle={{
                  scale: 0,
                  x: -100,
                  y: -100,
                }}
                width={250}
                height={250}
              />
            </YStack>
            <YStack pos="absolute" left={0} top={200}>
              <CloudPart
                enterStyle={{
                  scale: 0,
                  x: -100,
                  y: -100,
                }}
                exitStyle={{
                  scale: 0,
                  x: -100,
                  y: -100,
                }}
                width={250}
                height={250}
              />
            </YStack> */}
    </>
  )
}
