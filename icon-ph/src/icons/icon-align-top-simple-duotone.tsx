/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignTopSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M168 72v152a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M208 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-32 40v152a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16m-16 0H96v152h64Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAlignTopSimpleDuotone))
export { Memo as IconAlignTopSimpleDuotone }
