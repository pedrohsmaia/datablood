/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatLeftDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 88v80a8 8 0 0 1-8 8h-88v48l-96-96 96-96v48h88a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M208 72h-80V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h80a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 96h-88a8 8 0 0 0-8 8v28.69L35.31 128 112 51.31V80a8 8 0 0 0 8 8h88Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatLeftDuotone))
export { Memo as IconArrowFatLeftDuotone }
