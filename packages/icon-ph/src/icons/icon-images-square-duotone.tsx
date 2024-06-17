/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconImagesSquareDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 40H80a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h16.69l77.65-77.66a8 8 0 0 1 11.32 0L216 136.69V48a8 8 0 0 0-8-8m-88 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16"
          opacity={0.2}
        />
        <Path d="M208 32H80a16 16 0 0 0-16 16v16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h128v69.38l-16.7-16.7a16 16 0 0 0-22.62 0L93.37 176H80Zm96 160H48V80h16v96a16 16 0 0 0 16 16h96Zm32-32h-92l64-64 28 28zm-88-64a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8 8 8 0 0 1 8-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconImagesSquareDuotone))
export { Memo as IconImagesSquareDuotone }
