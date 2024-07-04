/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClockClockwiseDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M216 128a88 88 0 1 1-88-88 88 88 0 0 1 88 88" opacity={0.2} />
        <Path d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m88-24a8 8 0 0 0-8 8v18c-6.35-7.36-12.83-14.45-20.12-21.83a96 96 0 1 0-2 137.7 8 8 0 0 0-11-11.64 80 80 0 1 1 1.66-114.83c8.14 8.24 15.27 16.18 22.46 24.6h-23a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconClockClockwiseDuotone))
export { Memo as IconClockClockwiseDuotone }
