/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserCircleMinusBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164 56a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m70.51 54A107.88 107.88 0 1 1 146 21.49a12 12 0 0 1-4 23.67A85 85 0 0 0 128 44a83.94 83.94 0 0 0-65.95 135.94 83.48 83.48 0 0 1 29-23.42 52 52 0 1 1 74 0 83.36 83.36 0 0 1 29 23.42A83.52 83.52 0 0 0 212 128a85.2 85.2 0 0 0-1.16-14 12 12 0 0 1 23.67-4M128 148a28 28 0 1 0-28-28 28 28 0 0 0 28 28m0 64a83.53 83.53 0 0 0 48.43-15.43 60 60 0 0 0-96.86 0A83.53 83.53 0 0 0 128 212"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserCircleMinusBold))
export { Memo as IconUserCircleMinusBold }
