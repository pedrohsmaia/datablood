/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHourglassSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M205.64 53.66 128 128 50.36 53.66A8 8 0 0 1 56 40h144a8 8 0 0 1 5.64 13.66M128 128l-77.64 74.34A8 8 0 0 0 56 216h144a8 8 0 0 0 5.66-13.66Z"
          opacity={0.2}
        />
        <Path d="M211.18 196.56 139.57 128l71.61-68.56a1.59 1.59 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31 1.59 1.59 0 0 1 .13.13L116.43 128l-71.61 68.56a1.59 1.59 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31 1.59 1.59 0 0 1-.14-.13M200 48l-72 68.92L56 48ZM56 208l72-68.92L200 208Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHourglassSimpleDuotone))
export { Memo as IconHourglassSimpleDuotone }
