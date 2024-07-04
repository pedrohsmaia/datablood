/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLaptopDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 72v104H40V72a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"
          opacity={0.2}
        />
        <Path d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8M48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLaptopDuotone))
export { Memo as IconLaptopDuotone }
