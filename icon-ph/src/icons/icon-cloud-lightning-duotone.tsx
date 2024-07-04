/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudLightningDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 92a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 92"
          opacity={0.2}
        />
        <Path d="M156 16a76.2 76.2 0 0 0-71.08 48.76A53.26 53.26 0 0 0 76 64a52 52 0 0 0 0 104h37.87l-16.73 27.88A8 8 0 0 0 104 208h25.87l-16.73 27.88a8 8 0 0 0 13.72 8.24l24-40A8 8 0 0 0 144 192h-25.87l14.4-24H156a76 76 0 0 0 0-152m0 136H76a36 36 0 0 1 0-72 38.11 38.11 0 0 1 4.78.31q-.56 3.57-.77 7.23a8 8 0 0 0 16 .92A60.06 60.06 0 1 1 156 152" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCloudLightningDuotone))
export { Memo as IconCloudLightningDuotone }
