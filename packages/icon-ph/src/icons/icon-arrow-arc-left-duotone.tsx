/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowArcLeftDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M88 152H24V88Z" opacity={0.2} />
        <Path d="M201.54 110.46a104 104 0 0 0-145.4-1.63L29.66 82.34A8 8 0 0 0 16 88v64a8 8 0 0 0 8 8h64a8 8 0 0 0 5.66-13.66l-26.19-26.18A88 88 0 0 1 216 184a8 8 0 0 0 16 0 103.33 103.33 0 0 0-30.46-73.54M32 144v-36.69L68.69 144Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowArcLeftDuotone))
export { Memo as IconArrowArcLeftDuotone }
