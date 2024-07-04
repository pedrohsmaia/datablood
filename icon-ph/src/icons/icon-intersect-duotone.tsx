/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconIntersectDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M168 96a72 72 0 0 1-72 72 73.37 73.37 0 0 1-7.6-.4 73.37 73.37 0 0 1-.4-7.6 72 72 0 0 1 72-72 73.37 73.37 0 0 1 7.6.4 73.37 73.37 0 0 1 .4 7.6"
          opacity={0.2}
        />
        <Path d="M174.63 81.37a80 80 0 1 0-93.26 93.26 80 80 0 1 0 93.26-93.26M32 96a64 64 0 0 1 126-16 80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 0a64.07 64.07 0 0 1-64 64 64.07 64.07 0 0 1 64-64m0 128a64.11 64.11 0 0 1-62-48 80.08 80.08 0 0 0 78-78 64 64 0 0 1-16 126" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconIntersectDuotone))
export { Memo as IconIntersectDuotone }
