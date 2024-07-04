/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserRectangleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 56v144a8 8 0 0 1-8 8h-20.1a72 72 0 0 0-67.9-48 40 40 0 1 0-40-40 40 40 0 0 0 40 40 72 72 0 0 0-67.9 48H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32 32 32 0 0 1-32-32m-23.43 80a64 64 0 0 1 110.86 0ZM216 200h-14.67a80.14 80.14 0 0 0-43.69-42.28 48 48 0 1 0-59.28 0A80.14 80.14 0 0 0 54.67 200H40V56h176z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconUserRectangleDuotone))
export { Memo as IconUserRectangleDuotone }
