/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareTwoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Zm-66.43-92.76a12 12 0 0 0-2.35-16.82 12 12 0 0 0-16.8 2.36 11.7 11.7 0 0 0-1.74 3.22 12 12 0 0 1-22.63-8 36.45 36.45 0 0 1 5.2-9.67 36 36 0 0 1 57.5 43.34L128 164h24a12 12 0 0 1 0 24h-48a12 12 0 0 1-9.6-19.2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareTwoBold))
export { Memo as IconNumberSquareTwoBold }
