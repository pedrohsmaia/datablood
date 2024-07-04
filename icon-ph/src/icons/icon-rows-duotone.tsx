/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRowsDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 152v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8m-8-96H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8"
          opacity={0.2}
        />
        <Path d="M208 136H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16m0 56H48v-40h160zm0-144H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 56H48V64h160z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRowsDuotone))
export { Memo as IconRowsDuotone }
