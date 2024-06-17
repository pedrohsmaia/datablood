/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareFourBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM86.2 150.93A12 12 0 0 1 84.68 140l24-68a12 12 0 1 1 22.64 8L113 132h19v-16a12 12 0 0 1 24 0v16h4a12 12 0 0 1 0 24h-4v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1-9.8-5.07"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareFourBold))
export { Memo as IconNumberSquareFourBold }
