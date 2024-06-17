/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsSixVerticalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 32v192a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16"
          opacity={0.2}
        />
        <Path d="M104 60a12 12 0 1 1-12-12 12 12 0 0 1 12 12m60 12a12 12 0 1 0-12-12 12 12 0 0 0 12 12m-72 44a12 12 0 1 0 12 12 12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-72 68a12 12 0 1 0 12 12 12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDotsSixVerticalDuotone))
export { Memo as IconDotsSixVerticalDuotone }
