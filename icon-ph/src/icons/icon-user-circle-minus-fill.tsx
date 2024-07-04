/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserCircleMinusFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 56a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m53.35 48.11a8 8 0 0 0-6.57 9.21A88.85 88.85 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41A79.86 79.86 0 0 0 172 165.1a4 4 0 0 0-4.84.32 59.81 59.81 0 0 1-78.27 0 4 4 0 0 0-4.89-.32 79.71 79.71 0 0 0-21.79 21.31A88 88 0 0 1 128 40a88.76 88.76 0 0 1 14.68 1.22 8 8 0 0 0 2.64-15.78 103.92 103.92 0 1 0 85.24 85.24 8 8 0 0 0-9.21-6.57M84 120a44 44 0 1 0 44-44 44 44 0 0 0-44 44"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserCircleMinusFill))
export { Memo as IconUserCircleMinusFill }
