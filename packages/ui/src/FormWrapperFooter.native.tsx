import { useHeaderHeight } from '@react-navigation/elements'
import { forwardRef } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { TamaguiElement, YStack, YStackProps } from 'tamagui'

/**
 * on native, this will be pushed to the bottom of the screen
 */
export const FormWrapperFooter = forwardRef<TamaguiElement, YStackProps>((props, ref) => {
  const headerHeight = useHeaderHeight()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}
    >
      <YStack
        ref={ref}
        pb="$4"
        px="$4"
        gap="$4"
        // reverse the direction so that the primary button is on the bottom of the screen on mobile
        flexDirection="column-reverse"
        {...props}
      />
    </KeyboardAvoidingView>
  )
})
