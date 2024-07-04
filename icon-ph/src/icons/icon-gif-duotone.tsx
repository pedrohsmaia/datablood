/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGifDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16"
          opacity={0.2}
        />
        <Path d="M208 88a8 8 0 0 1-8 8h-24v24h16a8 8 0 0 1 0 16h-16v32a8 8 0 0 1-16 0V88a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8m-72-8a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m-32 40H88a8 8 0 0 0 0 16h8v8a16 16 0 0 1-32 0v-32a16 16 0 0 1 27.93-10.67 8 8 0 1 0 11.92-10.66A32 32 0 0 0 48 112v32a32 32 0 0 0 64 0v-16a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGifDuotone))
export { Memo as IconGifDuotone }
