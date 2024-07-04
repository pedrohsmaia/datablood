/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadioDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 80H32v120a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8m-56 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
          opacity={0.2}
        />
        <Path d="M104 176a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8-40H64a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m0-32H64a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m136-16v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V80a8 8 0 0 1 5.7-7.66l160-48a8 8 0 0 1 4.6 15.33L86.51 72H216a16 16 0 0 1 16 16m-16 112V88H40v112zm-16-56a40 40 0 1 1-40-40 40 40 0 0 1 40 40m-16 0a24 24 0 1 0-24 24 24 24 0 0 0 24-24" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRadioDuotone))
export { Memo as IconRadioDuotone }
