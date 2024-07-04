/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTimerDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M216 136a88 88 0 1 1-88-88 88 88 0 0 1 88 88" opacity={0.2} />
        <Path d="M128 40a96 96 0 1 0 96 96 96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTimerDuotone))
export { Memo as IconTimerDuotone }
