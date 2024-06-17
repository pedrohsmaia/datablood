/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPersonSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M152 48a24 24 0 1 1-24-24 24 24 0 0 1 24 24" opacity={0.2} />
        <Path d="M128 80a32 32 0 1 0-32-32 32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16m102.86 100.12a8 8 0 0 1-11 2.74c-.35-.21-35.11-20.59-83.88-22.67V149l62 69.73a8 8 0 1 1-12 10.62L128 164l-58 65.31a8 8 0 1 1-12-10.62L120 149v-36.82c-49 2.08-83.52 22.46-83.88 22.68a8 8 0 0 1-8.24-13.72C29.6 120.11 70.45 96 128 96s98.4 24.11 100.12 25.14a8 8 0 0 1 2.74 10.98" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPersonSimpleDuotone))
export { Memo as IconPersonSimpleDuotone }
