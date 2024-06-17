/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSubtractDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 160a72 72 0 0 1-143.6 7.6 73.37 73.37 0 0 0 7.6.4 72 72 0 0 0 72-72 73.37 73.37 0 0 0-.4-7.6A72 72 0 0 1 232 160"
          opacity={0.2}
        />
        <Path d="M174.63 81.35a80 80 0 1 0-93.28 93.28 80 80 0 1 0 93.28-93.28M32 96a64 64 0 1 1 64 64 64.07 64.07 0 0 1-64-64m128 128a63.81 63.81 0 0 1-62-48 80.07 80.07 0 0 0 78-78 64 64 0 0 1-16 126" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSubtractDuotone))
export { Memo as IconSubtractDuotone }
