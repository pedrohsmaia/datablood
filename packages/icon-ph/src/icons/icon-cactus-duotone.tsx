/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCactusDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 116a60 60 0 0 1-60 60h-12v40H96v-80H84a60 60 0 0 1-60-60 20 20 0 0 1 20-20 20 20 0 0 1 20 20 20 20 0 0 0 20 20h12V56a32 32 0 0 1 32-32 32 32 0 0 1 32 32v80h12a20 20 0 0 0 20-20 20 20 0 0 1 20-20 20 20 0 0 1 20 20"
          opacity={0.2}
        />
        <Path d="M216 208h-48v-24h4a68.07 68.07 0 0 0 68-68 28 28 0 0 0-56 0 12 12 0 0 1-12 12h-4V56a40 40 0 0 0-80 0v32h-4a12 12 0 0 1-12-12 28 28 0 0 0-56 0 68.07 68.07 0 0 0 68 68h4v64H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M96 128H84a52.06 52.06 0 0 1-52-52 12 12 0 0 1 24 0 28 28 0 0 0 28 28h12a8 8 0 0 0 8-8V56a24 24 0 0 1 48 0v80a8 8 0 0 0 8 8h12a28 28 0 0 0 28-28 12 12 0 0 1 24 0 52.06 52.06 0 0 1-52 52h-12a8 8 0 0 0-8 8v32h-48v-72a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCactusDuotone))
export { Memo as IconCactusDuotone }
