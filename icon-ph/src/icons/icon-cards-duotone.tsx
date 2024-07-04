/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCardsDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M192 88v112a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M184 72H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 128H40V88h144zm48-144v120a8 8 0 0 1-16 0V56H64a8 8 0 0 1 0-16h152a16 16 0 0 1 16 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCardsDuotone))
export { Memo as IconCardsDuotone }
