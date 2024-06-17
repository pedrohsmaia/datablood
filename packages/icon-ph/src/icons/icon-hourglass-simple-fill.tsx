/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHourglassSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M211.31 196.69A16 16 0 0 1 200 224H56a16 16 0 0 1-11.32-27.31 1.59 1.59 0 0 0 .13-.13L116.43 128 44.82 59.44a1.59 1.59 0 0 0-.13-.13A16 16 0 0 1 56 32h144a16 16 0 0 1 11.32 27.31 1.59 1.59 0 0 0-.13.13L139.57 128l71.61 68.56a1.59 1.59 0 0 0 .13.13"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHourglassSimpleFill))
export { Memo as IconHourglassSimpleFill }
