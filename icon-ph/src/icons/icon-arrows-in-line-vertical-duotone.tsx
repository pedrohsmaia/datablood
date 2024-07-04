/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsInLineVerticalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M128 96 96 64h64Zm-32 96h64l-32-32Z" opacity={0.2} />
        <Path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M90.34 69.66A8 8 0 0 1 96 56h24V16a8 8 0 0 1 16 0v40h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0Zm25 2.34L128 84.69 140.69 72Zm50.35 114.34A8 8 0 0 1 160 200h-24v40a8 8 0 0 1-16 0v-40H96a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0Zm-25-2.34L128 171.31 115.31 184Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsInLineVerticalDuotone))
export { Memo as IconArrowsInLineVerticalDuotone }
