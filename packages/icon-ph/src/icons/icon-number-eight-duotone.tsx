/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberEightDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"
          opacity={0.2}
        />
        <Path d="M155.55 119.27a48 48 0 1 0-55.1 0 56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32 32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40 40 40 0 0 1-40 40" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconNumberEightDuotone))
export { Memo as IconNumberEightDuotone }
