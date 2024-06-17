/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHandPointingDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 116v36a80 80 0 0 1-80 80c-44.18 0-55.81-24-93.32-90a20 20 0 0 1 34.64-20L88 152V44a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0"
          opacity={0.2}
        />
        <Path d="M188 88a27.86 27.86 0 0 0-13.35 3.39A28 28 0 0 0 136 74.7V44a28 28 0 0 0-56 0v80l-3.82-6.13A28 28 0 0 0 27.73 146l4.67 8.23C66.81 214.89 81.05 240 128 240a88.1 88.1 0 0 0 88-88v-36a28 28 0 0 0-28-28m12 64a72.08 72.08 0 0 1-72 72c-37.63 0-47.84-18-81.68-77.68l-4.69-8.27V138A12 12 0 0 1 46 121.61a11.88 11.88 0 0 1 6-1.6 12 12 0 0 1 10.41 6 1.76 1.76 0 0 0 .14.23l18.67 30A8 8 0 0 0 96 152V44a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0v20a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHandPointingDuotone))
export { Memo as IconHandPointingDuotone }
