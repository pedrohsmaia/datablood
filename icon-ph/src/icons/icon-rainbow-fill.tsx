/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRainbowFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 48A120.13 120.13 0 0 0 8 168v16a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8v-16A120.13 120.13 0 0 0 128 48m32 128a8 8 0 0 1-8-8 24 24 0 0 0-48 0 8 8 0 0 1-16 0 40 40 0 0 1 80 0 8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8 56 56 0 0 0-112 0 8 8 0 0 1-16 0 72 72 0 0 1 144 0 8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8 88 88 0 0 0-176 0 8 8 0 0 1-16 0 104 104 0 0 1 208 0 8 8 0 0 1-8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRainbowFill))
export { Memo as IconRainbowFill }
