/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPathDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M224 200a24 24 0 1 1-24-24 24 24 0 0 1 24 24" opacity={0.2} />
        <Path d="M200 168a32.06 32.06 0 0 0-31 24H72a32 32 0 0 1 0-64h96a40 40 0 0 0 0-80H72a8 8 0 0 0 0 16h96a24 24 0 0 1 0 48H72a48 48 0 0 0 0 96h97a32 32 0 1 0 31-40m0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPathDuotone))
export { Memo as IconPathDuotone }
