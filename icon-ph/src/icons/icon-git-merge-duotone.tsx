/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitMergeDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M104 56a24 24 0 1 1-24-24 24 24 0 0 1 24 24" opacity={0.2} />
        <Path d="M208 112a32.06 32.06 0 0 0-31 24h-25a40.19 40.19 0 0 1-32-16L93.69 84.92A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-65l19.2 25.6A56.26 56.26 0 0 0 152 152h25a32 32 0 1 0 31-40M64 56a16 16 0 1 1 16 16 16 16 0 0 1-16-16m32 144a16 16 0 1 1-16-16 16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGitMergeDuotone))
export { Memo as IconGitMergeDuotone }
