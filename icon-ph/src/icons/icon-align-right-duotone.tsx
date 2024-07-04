/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignRightDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M184 64v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8m-8 80H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h136a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8"
          opacity={0.2}
        />
        <Path d="M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m-32 24v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16m-16 0H80v40h96Zm16 88v40a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h136a16 16 0 0 1 16 16m-16 0H40v40h136Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlignRightDuotone))
export { Memo as IconAlignRightDuotone }
