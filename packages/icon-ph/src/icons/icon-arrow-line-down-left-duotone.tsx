/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineDownLeftDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M160 200H64v-96Z" opacity={0.2} />
        <Path d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-42.34 42.34a8 8 0 0 1 0 11.32L123.31 152l42.35 42.34A8 8 0 0 1 160 208H64a8 8 0 0 1-8-8v-96a8 8 0 0 1 13.66-5.66L112 140.69l58.34-58.35a8 8 0 0 1 11.32 0M140.69 192l-34.34-34.34L72 123.31V192Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineDownLeftDuotone))
export { Memo as IconArrowLineDownLeftDuotone }
