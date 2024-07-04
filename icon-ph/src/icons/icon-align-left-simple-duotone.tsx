/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignLeftSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 96v64a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h152a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M40 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m200 40v64a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16m-16 64V96H72v64z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlignLeftSimpleDuotone))
export { Memo as IconAlignLeftSimpleDuotone }
