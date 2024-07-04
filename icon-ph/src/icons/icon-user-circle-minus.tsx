/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserCircleMinus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 56a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m62.56 54.68a103.92 103.92 0 1 1-85.24-85.24 8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41 79.66 79.66 0 0 1 36.06-28.75 48 48 0 1 1 59.4 0 79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a88.85 88.85 0 0 0-1.22-14.68 8 8 0 1 1 15.78-2.64M128 152a32 32 0 1 0-32-32 32 32 0 0 0 32 32m0 64a87.57 87.57 0 0 0 53.92-18.5 64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserCircleMinus))
export { Memo as IconUserCircleMinus }
