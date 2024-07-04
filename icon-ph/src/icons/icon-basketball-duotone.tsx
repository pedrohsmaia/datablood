/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBasketballDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m60 195.88.12.12ZM60 60a96.43 96.43 0 0 0 0 135.88 96.09 96.09 0 0 0 28-67.94A96.09 96.09 0 0 0 60 60m136 0a96.43 96.43 0 0 0 0 135.88A96.43 96.43 0 0 0 196 60m0 135.88.12.12z"
          opacity={0.2}
        />
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40.37 136h39.26A87.2 87.2 0 0 1 60 183.83 87.54 87.54 0 0 1 40.37 136M136 120V40.37a87.59 87.59 0 0 1 48.68 20.37A103.06 103.06 0 0 0 160.3 120Zm-16 0H95.7a103.06 103.06 0 0 0-24.38-59.26A87.59 87.59 0 0 1 120 40.37Zm-40.37 0H40.37A87.54 87.54 0 0 1 60 72.17 87.2 87.2 0 0 1 79.63 120m16.07 16H120v79.63a87.59 87.59 0 0 1-48.68-20.37A103.09 103.09 0 0 0 95.7 136m40.3 0h24.3a103.09 103.09 0 0 0 24.38 59.26A87.59 87.59 0 0 1 136 215.63Zm40.37 0h39.26A87.54 87.54 0 0 1 196 183.83 87.2 87.2 0 0 1 176.37 136m0-16A87.2 87.2 0 0 1 196 72.17 87.54 87.54 0 0 1 215.63 120Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBasketballDuotone))
export { Memo as IconBasketballDuotone }
