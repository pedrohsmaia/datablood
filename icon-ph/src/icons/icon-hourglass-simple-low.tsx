/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHourglassSimpleLow = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M211.18 196.56 139.57 128l71.61-68.56a1.59 1.59 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.3 27.31l.12.13L116.43 128l-71.61 68.56-.12.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31 1.59 1.59 0 0 1-.14-.13M158.21 168H97.79L128 139.08ZM200 48l-72 68.92L56 48ZM56 208l25.06-24h93.84l25.1 24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHourglassSimpleLow))
export { Memo as IconHourglassSimpleLow }
