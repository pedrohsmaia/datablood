/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCallBellBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M24 180h208a12 12 0 0 0 0-24h-4.09A100.16 100.16 0 0 0 140 60.72V44h12a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24h12v16.72A100.16 100.16 0 0 0 28.09 156H24a12 12 0 0 0 0 24m104-96a76.09 76.09 0 0 1 75.89 72H52.11A76.09 76.09 0 0 1 128 84m116 124a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h208a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCallBellBold))
export { Memo as IconCallBellBold }
