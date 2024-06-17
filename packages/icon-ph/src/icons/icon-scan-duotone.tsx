/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScanDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M176 88v80a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M224 40v40a8 8 0 0 1-16 0V48h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M80 208H48v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m136-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M40 88a8 8 0 0 0 8-8V48h32a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m128 96H88a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16v80a16 16 0 0 1-16 16m-80-16h80V88H88Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconScanDuotone))
export { Memo as IconScanDuotone }
