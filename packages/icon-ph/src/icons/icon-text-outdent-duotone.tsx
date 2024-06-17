/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextOutdentDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M72 56v80L32 96Z" opacity={0.2} />
        <Path d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M66.34 141.66l-40-40a8 8 0 0 1 0-11.32l40-40A8 8 0 0 1 80 56v80a8 8 0 0 1-13.66 5.66M64 75.31 43.31 96 64 116.69Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTextOutdentDuotone))
export { Memo as IconTextOutdentDuotone }
