/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareSevenBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM92 88a12 12 0 0 1 12-12h48a12 12 0 0 1 11.28 16.1l-32 88a12 12 0 0 1-22.56-8.2l26.15-71.9H104a12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareSevenBold))
export { Memo as IconNumberSquareSevenBold }
