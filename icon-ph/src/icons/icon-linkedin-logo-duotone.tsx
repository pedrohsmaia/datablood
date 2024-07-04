/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinkedinLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12 12 12 0 0 1 12 12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLinkedinLogoDuotone))
export { Memo as IconLinkedinLogoDuotone }
