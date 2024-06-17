/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTreeEvergreenDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m32 192 56-72H48l80-104 80 104h-40l56 72Z" opacity={0.2} />
        <Path d="M230.31 187.09 184.36 128H208a8 8 0 0 0 6.34-12.88l-80-104a8 8 0 0 0-12.68 0l-80 104A8 8 0 0 0 48 128h23.64l-45.95 59.09A8 8 0 0 0 32 200h88v40a8 8 0 0 0 16 0v-40h88a8 8 0 0 0 6.31-12.91M48.36 184l46-59.09A8 8 0 0 0 88 112H64.25L128 29.12 191.75 112H168a8 8 0 0 0-6.31 12.91L207.64 184Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTreeEvergreenDuotone))
export { Memo as IconTreeEvergreenDuotone }
