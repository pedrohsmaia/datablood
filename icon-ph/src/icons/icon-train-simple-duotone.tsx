/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrainSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 56v72H48V56a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24"
          opacity={0.2}
        />
        <Path d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M72 40h112a16 16 0 0 1 16 16v64H56V56a16 16 0 0 1 16-16m112 160H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12 12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTrainSimpleDuotone))
export { Memo as IconTrainSimpleDuotone }
