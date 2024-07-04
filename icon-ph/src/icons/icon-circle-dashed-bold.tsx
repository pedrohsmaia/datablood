/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleDashedBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92.38 38.05A12 12 0 0 1 101 23.42a108 108 0 0 1 54 0 12 12 0 1 1-6 23.23 84.11 84.11 0 0 0-42 0 12 12 0 0 1-14.62-8.6M50.94 52.34a108.1 108.1 0 0 0-27 46.76 12 12 0 0 0 8.37 14.77 12.2 12.2 0 0 0 3.2.43 12 12 0 0 0 11.56-8.8 84 84 0 0 1 21-36.35 12 12 0 1 0-17.13-16.81m-3.88 98.14a12 12 0 0 0-23.12 6.42 108 108 0 0 0 27 46.78A12 12 0 0 0 68 186.85a84 84 0 0 1-20.94-36.37M149 209.35a84 84 0 0 1-42 0 12 12 0 1 0-6 23.23 108 108 0 0 0 54 0 12 12 0 1 0-6-23.23m74.72-67.22A12 12 0 0 0 209 150.5a84 84 0 0 1-21 36.35 12 12 0 0 0 17.12 16.82 108.19 108.19 0 0 0 27-46.77 12 12 0 0 0-8.41-14.77Zm-14.77-36.61a12 12 0 0 0 23.12-6.42 108 108 0 0 0-27-46.78A12 12 0 1 0 188 69.15a84 84 0 0 1 20.94 36.37Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleDashedBold))
export { Memo as IconCircleDashedBold }
