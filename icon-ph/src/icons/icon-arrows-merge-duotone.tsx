/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsMergeDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m160 200-32 32-32-32Z" opacity={0.2} />
        <Path d="M184 32a8 8 0 0 0-8 8v60.69l-48 48-48-48V40a8 8 0 0 0-16 0v64a8 8 0 0 0 2.34 5.66L120 163.31V192H96a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 192h-24v-28.69l53.66-53.65A8 8 0 0 0 192 104V40a8 8 0 0 0-8-8m-56 188.69L115.31 208h25.38Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsMergeDuotone))
export { Memo as IconArrowsMergeDuotone }
