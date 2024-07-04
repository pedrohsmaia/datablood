/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareFiveBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM92.16 126l8-48A12 12 0 0 1 112 68h40a12 12 0 0 1 0 24h-29.83l-2.71 16.23A45.39 45.39 0 0 1 124 108a40 40 0 0 1 0 80 39.53 39.53 0 0 1-28.57-11.6 12 12 0 1 1 17.14-16.8A15.54 15.54 0 0 0 124 164a16 16 0 0 0 0-32 15.54 15.54 0 0 0-11.43 4.4A12 12 0 0 1 92.16 126"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareFiveBold))
export { Memo as IconNumberSquareFiveBold }
