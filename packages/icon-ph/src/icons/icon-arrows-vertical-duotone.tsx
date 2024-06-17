/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsVerticalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M160 56H96l32-32Zm-32 176 32-32H96Z" opacity={0.2} />
        <Path d="M160 192h-24V64h24a8 8 0 0 0 5.66-13.66l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 64h24v128H96a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 192M128 35.31 140.69 48h-25.38Zm0 185.38L115.31 208h25.38Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsVerticalDuotone))
export { Memo as IconArrowsVerticalDuotone }
