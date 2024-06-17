/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrafficSignalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M184 32H72a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 160a24 24 0 1 1 24-24 24 24 0 0 1-24 24m0-80a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
          opacity={0.2}
        />
        <Path d="M128 56a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16m0 32a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16m88-40h-16V80h16a8 8 0 0 0 0-16h-16V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24H40a8 8 0 0 0 0 16h16v64H40a8 8 0 0 0 0 16h16v56a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-56h16a8 8 0 0 0 0-16m-32 72H72V40h112z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTrafficSignalDuotone))
export { Memo as IconTrafficSignalDuotone }
