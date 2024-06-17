/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTerminalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M216 72v120H40V64h168a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="m117.31 134-72 64a8 8 0 1 1-10.63-12L100 128 34.69 70a8 8 0 1 1 10.63-12l72 64a8 8 0 0 1 0 12ZM216 184h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTerminalDuotone))
export { Memo as IconTerminalDuotone }
