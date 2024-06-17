/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTestTubeDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m167.18 140.82-72.41 72.41a36.77 36.77 0 0 1-52 0 36.77 36.77 0 0 1 0-52l30-30c9.37-3.65 25.78-6.36 47.18 4.82s37.86 8.42 47.23 4.77"
          opacity={0.2}
        />
        <Path d="m237.66 86.34-60-60a8 8 0 0 0-11.32 0L37.11 155.57a44.77 44.77 0 0 0 63.32 63.32L212.32 107l22.21-7.4a8 8 0 0 0 3.13-13.25ZM89.11 207.57a28.77 28.77 0 0 1-40.68-40.68l28.8-28.8c8.47-2.9 21.75-4 39.07 5 10.6 5.54 20.18 8 28.56 8.73ZM205.47 92.41a8 8 0 0 0-3.13 1.93l-39.57 39.57c-8.47 2.9-21.75 4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172 43.31l45.19 45.19Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTestTubeDuotone))
export { Memo as IconTestTubeDuotone }
