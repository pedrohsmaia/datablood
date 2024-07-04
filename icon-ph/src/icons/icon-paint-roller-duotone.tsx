/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaintRollerDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 64v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h152a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M232 88h-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v24H16a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-24h16v50l-100.4 28.65A16.07 16.07 0 0 0 120 198v34a8 8 0 0 0 16 0v-34l100.4-28.68A16.07 16.07 0 0 0 248 154v-50a16 16 0 0 0-16-16m-32 40H48V64h152z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPaintRollerDuotone))
export { Memo as IconPaintRollerDuotone }
