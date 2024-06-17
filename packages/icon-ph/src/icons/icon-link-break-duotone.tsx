/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinkBreakDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m196.28 116.28-80 80a40 40 0 0 1-56.56-56.56l80-80a40 40 0 0 1 56.56 56.56"
          opacity={0.2}
        />
        <Path d="M190.63 65.37a32 32 0 0 0-45.19-.06l-11.65 12.21a8 8 0 0 1-11.58-11l11.72-12.29a1.59 1.59 0 0 1 .13-.13 48 48 0 0 1 67.88 67.88 1.59 1.59 0 0 1-.13.13l-12.29 11.72a8 8 0 0 1-11-11.58l12.21-11.65a32 32 0 0 0-.1-45.23m-68.42 113.11-11.65 12.21a32 32 0 0 1-45.25-45.25l12.21-11.65a8 8 0 0 0-11-11.58l-12.33 11.72a1.59 1.59 0 0 0-.13.13 48 48 0 0 0 67.88 67.88 1.59 1.59 0 0 0 .13-.13l11.72-12.29a8 8 0 1 0-11.58-11ZM208 152h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M48 104h24a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16m112 72a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8M96 80a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLinkBreakDuotone))
export { Memo as IconLinkBreakDuotone }
