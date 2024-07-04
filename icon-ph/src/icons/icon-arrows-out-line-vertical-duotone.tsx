/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsOutLineVerticalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M160 48H96l32-32Zm-32 192 32-32H96Z" opacity={0.2} />
        <Path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M88.61 51.06a8 8 0 0 1 1.73-8.72l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 160 56h-24v40a8 8 0 0 1-16 0V56H96a8 8 0 0 1-7.39-4.94M115.31 40h25.38L128 27.31Zm52.08 164.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 96 200h24v-40a8 8 0 0 1 16 0v40h24a8 8 0 0 1 7.39 4.94M140.69 216h-25.38L128 228.69Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsOutLineVerticalDuotone))
export { Memo as IconArrowsOutLineVerticalDuotone }
