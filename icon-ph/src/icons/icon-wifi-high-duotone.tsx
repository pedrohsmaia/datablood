/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWifiHighDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m238.2 87.69-104 125.43a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21 180.75 180.75 0 0 1 217.78 0 7.79 7.79 0 0 1 1.31 11.21"
          opacity={0.2}
        />
        <Path d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32 186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81 15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208 24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWifiHighDuotone))
export { Memo as IconWifiHighDuotone }
