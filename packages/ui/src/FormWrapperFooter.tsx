import { forwardRef } from 'react'
import { TamaguiElement, YStack, YStackProps } from 'tamagui'

export const FormWrapperFooter = forwardRef<TamaguiElement, YStackProps>((props, ref) => {
  return <YStack ref={ref} pb="$4" px="$4" gap="$4" {...props} />
})
