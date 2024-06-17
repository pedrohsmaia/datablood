/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShowerDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m184 72-22.09 129.31a8 8 0 0 1-13.54 4.34l-98-98a8 8 0 0 1 4.34-13.54Z"
          opacity={0.2}
        />
        <Path d="M64 236a12 12 0 1 1-12-12 12 12 0 0 1 12 12m20-44a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-64 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m32-32a12 12 0 1 0 12 12 12 12 0 0 0-12-12M256 40a8 8 0 0 1-8 8h-28.69l-27.85 27.86-21.66 126.79a16 16 0 0 1-27.09 8.66l-98-98a16 16 0 0 1 8.69-27.1l126.74-21.67L208 36.69A15.86 15.86 0 0 1 219.31 32H248a8 8 0 0 1 8 8m-81.79 41.79L56 102l98 98Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconShowerDuotone))
export { Memo as IconShowerDuotone }
