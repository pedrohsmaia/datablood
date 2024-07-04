/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPercentBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m208.49 64.47-144 144a12 12 0 1 1-17-17l144-144a12 12 0 0 1 17 17m-160.77 39.8A40 40 0 1 1 76 116a39.72 39.72 0 0 1-28.28-11.73M60 76a16 16 0 1 0 4.69-11.31A15.87 15.87 0 0 0 60 76m160 104a40 40 0 1 1-11.72-28.29A39.71 39.71 0 0 1 220 180m-24 0a15.87 15.87 0 0 0-4.69-11.32A16 16 0 1 0 196 180"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPercentBold))
export { Memo as IconPercentBold }
