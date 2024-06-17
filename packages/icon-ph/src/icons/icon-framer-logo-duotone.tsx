/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFramerLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M200 96h-72L56 32h144ZM56 160l72 72v-72h72l-72-64H56Z"
          opacity={0.2}
        />
        <Path d="M208 96V32a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 88H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 232v-64h64a8 8 0 0 0 5.31-14L149 104h51a8 8 0 0 0 8-8m-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V104h61Zm13-64h-61L77 40h115Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFramerLogoDuotone))
export { Memo as IconFramerLogoDuotone }
