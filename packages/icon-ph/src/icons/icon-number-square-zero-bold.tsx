/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareZeroBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 188c28.26 0 48-24.67 48-60s-19.74-60-48-60-48 24.67-48 60 19.74 60 48 60m0-96c23.33 0 24 32.32 24 36s-.67 36-24 36-24-32.32-24-36 .67-36 24-36m80-64H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareZeroBold))
export { Memo as IconNumberSquareZeroBold }
