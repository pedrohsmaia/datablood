import { forwardRef } from 'react'
import { ScrollView, TamaguiElement, YStack, YStackProps, withStaticProperties } from 'tamagui'
import { FormWrapperFooter } from './FormWrapperFooter'

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
    $gtSm={{
      width: '100%',
      maxWidth: 600,
      als: 'center',
    }}
    // $gtSm={{ width: 500, mx: 'auto' }}
    $sm={{ jc: 'space-between' }}
    {...props}
  />
))

const Body = forwardRef<TamaguiElement, YStackProps>((props, ref) => (
  <ScrollView>
    <YStack p="$4" ref={ref} gap="$2" pb="$8" {...props} />
  </ScrollView>
))

export const FormWrapper = withStaticProperties(Wrapper, {
  Body,
  Footer: FormWrapperFooter,
})
