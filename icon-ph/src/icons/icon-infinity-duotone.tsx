/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconInfinityDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M225.94 161.94a48 48 0 0 1-67.88 0L128 128l30.06-33.94a48 48 0 0 1 67.88 67.88M30.06 94.06a48 48 0 0 0 67.88 67.88L128 128 97.94 94.06a48 48 0 0 0-67.88 0"
          opacity={0.2}
        />
        <Path d="M248 128a56 56 0 0 1-95.6 39.6l-.33-.35-59.95-67.7a40 40 0 1 0 0 56.9l8.52-9.62a8 8 0 1 1 12 10.61l-8.69 9.81-.33.35a56 56 0 1 1 0-79.2l.33.35 59.95 67.7a40 40 0 1 0 0-56.9l-8.52 9.62a8 8 0 1 1-12-10.61l8.69-9.81.33-.35A56 56 0 0 1 248 128" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconInfinityDuotone))
export { Memo as IconInfinityDuotone }
