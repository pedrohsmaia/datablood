/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTwitchLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 48v108.25a8 8 0 0 1-2.88 6.15l-42.89 35.75a8.05 8.05 0 0 1-5.13 1.85h-42.2a8.05 8.05 0 0 0-5.13 1.85L72 240v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.12 6.15L122.9 208h42.2a16 16 0 0 0 10.25-3.71l42.89-35.75a15.93 15.93 0 0 0 5.76-12.29V48a16 16 0 0 0-16-16m0 124.25L165.1 192h-42.2a16 16 0 0 0-10.25 3.71L80 222.92V200a8 8 0 0 0-8-8H48V48h160ZM160 136V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m-48 0V88a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTwitchLogoDuotone))
export { Memo as IconTwitchLogoDuotone }
