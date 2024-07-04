/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberTwoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"
          opacity={0.2}
        />
        <Path d="M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53 32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconNumberTwoDuotone))
export { Memo as IconNumberTwoDuotone }
