/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRssDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M208 208H48V48a160 160 0 0 1 160 160" opacity={0.2} />
        <Path d="M98.91 157.09A71.53 71.53 0 0 1 120 208a8 8 0 0 1-16 0 56 56 0 0 0-56-56 8 8 0 0 1 0-16 71.53 71.53 0 0 1 50.91 21.09M48 88a8 8 0 0 0 0 16 104 104 0 0 1 104 104 8 8 0 0 0 16 0A120 120 0 0 0 48 88m118.79 1.21A166.89 166.89 0 0 0 48 40a8 8 0 0 0 0 16 151 151 0 0 1 107.48 44.52A151 151 0 0 1 200 208a8 8 0 0 0 16 0 166.9 166.9 0 0 0-49.21-118.79M52 192a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRssDuotone))
export { Memo as IconRssDuotone }
