/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPersonSimpleBikeDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 176a32 32 0 1 1-32-32 32 32 0 0 1 32 32M56 144a32 32 0 1 0 32 32 32 32 0 0 0-32-32"
          opacity={0.2}
        />
        <Path d="M164 80a28 28 0 1 0-28-28 28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12m36 96a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24M56 136a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24m136-80h-40a8 8 0 0 1-5.66-2.34L120 91.31 99.31 112l34.35 34.34A8 8 0 0 1 136 152v48a8 8 0 0 1-16 0v-44.69l-37.66-37.65a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0L155.31 104H192a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPersonSimpleBikeDuotone))
export { Memo as IconPersonSimpleBikeDuotone }
