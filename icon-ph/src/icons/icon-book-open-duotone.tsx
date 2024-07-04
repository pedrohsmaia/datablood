/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookOpenDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 64v128a8 8 0 0 1-8 8h-64a32 32 0 0 0-32 32 32 32 0 0 0-32-32H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h64a32 32 0 0 1 32 32 32 32 0 0 1 32-32h64a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M224 48h-64a40 40 0 0 0-32 16 40 40 0 0 0-32-16H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a24 24 0 0 1 24 24 8 8 0 0 0 16 0 24 24 0 0 1 24-24h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M96 192H32V64h64a24 24 0 0 1 24 24v112a39.81 39.81 0 0 0-24-8m128 0h-64a39.81 39.81 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBookOpenDuotone))
export { Memo as IconBookOpenDuotone }
