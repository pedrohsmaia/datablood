import {
  ScrollView,
  TamaguiElement,
  YStack,
  YStackProps,
  isWeb,
  withStaticProperties,
} from 'tamagui'
import { forwardRef } from 'react'
/**
 * this utility component is when creating forms where we want to
 * push the action button to the bottom of the screen on native
 * wrap the fields inside Body and the actions in Footer
 * you may use asChild on the wrapper as well
 */
const Wrapper = forwardRef<TamaguiElement, YStackProps>((props, ref) => (
  <YStack
    ref={ref}
    gap="$4"
    flex={1}
    jc="center"
    $gtSm={{ maxWidth: 500 }}
    $gtLg={{ width: 500, mx: 'auto' }}
    $sm={{ jc: 'space-between' }}
    {...props}
  />
))

const Body = forwardRef<TamaguiElement, YStackProps>((props, ref) => (
  <ScrollView>
    <YStack p="$4" ref={ref} gap="$2" pb="$8" {...props} />
  </ScrollView>
))

/**
 * on native, these will be pushed to the bottom of the screen
 */
const Footer = forwardRef<TamaguiElement, YStackProps>((props, ref) => (
  <YStack
    pb="$4"
    px="$4"
    ref={ref}
    // reverse the direction so that the primary button is on the bottom of the screen on mobile
    {...(!isWeb && {
      flexDirection: 'column-reverse',
    })}
    gap="$4"
    {...props}
  />
))

export const FormWrapper = withStaticProperties(Wrapper, {
  Body,
  Footer,
})
