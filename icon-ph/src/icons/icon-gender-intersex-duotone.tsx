/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderIntersexDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M176 112a56 56 0 1 1-56-56 56 56 0 0 1 56 56" opacity={0.2} />
        <Path d="M208 24h-40a8 8 0 0 0 0 16h20.69l-25.15 25.15A64 64 0 1 0 112 175.48V192H88a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16h-24v-16.52a63.92 63.92 0 0 0 45.84-98L200 51.31V72a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-88 136a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGenderIntersexDuotone))
export { Memo as IconGenderIntersexDuotone }
