/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMegaphoneSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M136 69.09v101.82l-93.76 28.76A8 8 0 0 1 32 192V48a8 8 0 0 1 10.24-7.67Z"
          opacity={0.2}
        />
        <Path d="m220.54 86.66-176.06-54A16 16 0 0 0 24 48v144a16 16 0 0 0 16 16 16 16 0 0 0 4.52-.65L128 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 232 138v-36a16.09 16.09 0 0 0-11.46-15.34M128 165l-88 27V48l88 27Zm48 27h-32v-15.18l32-9.82Zm40-54h-.11L144 160.08V79.92l71.89 22h.11v36Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMegaphoneSimpleDuotone))
export { Memo as IconMegaphoneSimpleDuotone }
