/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRobotDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M200 56H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-36 128H92a20 20 0 0 1 0-40h72a20 20 0 0 1 0 40"
          opacity={0.2}
        />
        <Path d="M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m16 144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Zm-52-56H92a28 28 0 0 0 0 56h72a28 28 0 0 0 0-56m-28 16v24h-16v-24Zm-56 12a12 12 0 0 1 12-12h12v24H92a12 12 0 0 1-12-12m84 12h-12v-24h12a12 12 0 0 1 0 24m-92-68a12 12 0 1 1 12 12 12 12 0 0 1-12-12m88 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRobotDuotone))
export { Memo as IconRobotDuotone }
