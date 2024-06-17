/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderNeuterDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M200 104a72 72 0 1 1-72-72 72 72 0 0 1 72 72" opacity={0.2} />
        <Path d="M208 104a80 80 0 1 0-88 79.6V232a8 8 0 0 0 16 0v-48.4a80.11 80.11 0 0 0 72-79.6m-80 64a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGenderNeuterDuotone))
export { Memo as IconGenderNeuterDuotone }
