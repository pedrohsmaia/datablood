import { ScrollView, YStack, isWeb, withStaticProperties } from 'tamagui'
/**
 * this utility component is when creating forms where we want to
 * push the action button to the bottom of the screen on native
 * wrap the fields inside Body and the actions in Footer
 * you may use asChild on the wrapper as well
 */
const Wrapper = YStack.styleable((props, ref) => (
  <YStack
    ref={ref}
    p="$4"
    gap="$5"
    flex={1}
    jc="center"
    $gtSm={{ maxWidth: 500 }}
    $gtLg={{ width: 500, mx: 'auto' }}
    $sm={{ jc: 'space-between' }}
    {...props}
  />
))

const Body = YStack.styleable((props, ref) => (
  <ScrollView>
    <YStack p="$1" ref={ref} gap="$2" pb="$8" {...props} />
  </ScrollView>
))

/**
 * on native, these will be pushed to the bottom of the screen
 */
const Footer = YStack.styleable((props, ref) => (
  <YStack
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
