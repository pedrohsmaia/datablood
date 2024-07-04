/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareHalfBottomDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 128v72a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-72Z"
          opacity={0.2}
        />
        <Path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v64H56V56Zm0 144H56v-64h144z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSquareHalfBottomDuotone))
export { Memo as IconSquareHalfBottomDuotone }
