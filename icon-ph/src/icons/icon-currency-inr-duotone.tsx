/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyInrDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M160 92a52 52 0 0 1-52 52H72V40h36a52 52 0 0 1 52 52"
          opacity={0.2}
        />
        <Path d="M208 80a8 8 0 0 1-8 8h-32.15c.09 1.32.15 2.65.15 4a60.07 60.07 0 0 1-60 60H92.69l72.69 66.08a8 8 0 1 1-10.76 11.84l-88-80A8 8 0 0 1 72 136h36a44.05 44.05 0 0 0 44-44c0-1.35-.07-2.68-.19-4H72a8 8 0 0 1 0-16h75.17A44 44 0 0 0 108 48H72a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16h-51.26a60.13 60.13 0 0 1 15.82 24H200a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyInrDuotone))
export { Memo as IconCurrencyInrDuotone }
