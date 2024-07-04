/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBriefcaseMetalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 72v32H32V72a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8M32 200a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-32H32Z"
          opacity={0.2}
        />
        <Path d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M40 112h176v48H40Zm56-64a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v24H40V72Zm0 128H40v-24h176z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBriefcaseMetalDuotone))
export { Memo as IconBriefcaseMetalDuotone }
