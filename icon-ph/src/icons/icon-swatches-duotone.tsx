/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSwatchesDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m127.88 43.11-25 143.14a35.71 35.71 0 0 1-41.34 29.2 36 36 0 0 1-28.95-41.71l25-143.13a8 8 0 0 1 9.19-6.49l54.67 9.73a8 8 0 0 1 6.43 9.26"
          opacity={0.2}
        />
        <Path d="M80 180a12 12 0 1 1-12-12 12 12 0 0 1 12 12m152-23.81V208a16 16 0 0 1-16 16H68a46.36 46.36 0 0 1-7.94-.68 44 44 0 0 1-35.43-50.95l25-143.13a15.94 15.94 0 0 1 18.47-13L122.84 26a16 16 0 0 1 12.92 18.52l-12.08 69L191.49 89a16 16 0 0 1 20.45 9.52L231 150.69a18.35 18.35 0 0 1 1 5.5M95 184.87l25-143.13L65.46 32l-25 143.1a28 28 0 0 0 22.44 32.47A27.29 27.29 0 0 0 83.46 203 27.84 27.84 0 0 0 95 184.87M108.78 195 216 156.11 196.92 104l-76.42 27.7-9.78 55.92a44.63 44.63 0 0 1-1.94 7.38M216 173.12 119.74 208H216Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSwatchesDuotone))
export { Memo as IconSwatchesDuotone }
