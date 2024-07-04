/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotOutlineDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M152 128a24 24 0 1 1-24-24 24 24 0 0 1 24 24" opacity={0.2} />
        <Path d="M128 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDotOutlineDuotone))
export { Memo as IconDotOutlineDuotone }
