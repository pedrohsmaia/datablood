/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTelevisionSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 80v120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69 85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 136H40V80h176z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTelevisionSimpleDuotone))
export { Memo as IconTelevisionSimpleDuotone }
