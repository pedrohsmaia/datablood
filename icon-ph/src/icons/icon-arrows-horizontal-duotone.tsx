/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsHorizontalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m24 128 32-32v64Zm176-32v64l32-32Z" opacity={0.2} />
        <Path d="m237.66 122.34-32-32A8 8 0 0 0 192 96v24H64V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 64 160v-24h128v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32M48 140.69 35.31 128 48 115.31Zm160 0v-25.38L220.69 128Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsHorizontalDuotone))
export { Memo as IconArrowsHorizontalDuotone }
