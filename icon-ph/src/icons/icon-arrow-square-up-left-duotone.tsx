/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSquareUpLeftDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160ZM88 144V96a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69l50.35 50.34a8 8 0 0 1-11.32 11.32L104 115.31V144a8 8 0 0 1-16 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSquareUpLeftDuotone))
export { Memo as IconArrowSquareUpLeftDuotone }
