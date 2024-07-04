/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRainbowLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M182 168v16a6 6 0 0 1-12 0v-16a42 42 0 0 0-84 0v16a6 6 0 0 1-12 0v-16a54 54 0 0 1 108 0m-54-86a86.1 86.1 0 0 0-86 86v16a6 6 0 0 0 12 0v-16a74 74 0 0 1 148 0v16a6 6 0 0 0 12 0v-16a86.1 86.1 0 0 0-86-86m0-32A118.13 118.13 0 0 0 10 168v16a6 6 0 0 0 12 0v-16a106 106 0 0 1 212 0v16a6 6 0 0 0 12 0v-16A118.13 118.13 0 0 0 128 50"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRainbowLight))
export { Memo as IconRainbowLight }
