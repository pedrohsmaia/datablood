/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWebcamDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M128 32a72 72 0 1 0 72 72 72 72 0 0 0-72-72m0 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
          opacity={0.2}
        />
        <Path d="M168 104a40 40 0 1 0-40 40 40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24 24 24 0 0 1-24-24m120 96h-88v-16.4a80 80 0 1 0-16 0V200H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M64 104a64 64 0 1 1 64 64 64.07 64.07 0 0 1-64-64" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWebcamDuotone))
export { Memo as IconWebcamDuotone }
