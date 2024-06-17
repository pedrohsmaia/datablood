/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyBtcDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M192 160a40 40 0 0 1-40 40H80V48h60a36 36 0 0 1 0 72h12a40 40 0 0 1 40 40"
          opacity={0.2}
        />
        <Path d="M170.48 115.7A44 44 0 0 0 144 40.19V24a8 8 0 0 0-16 0v16h-16V24a8 8 0 0 0-16 0v16H64a8 8 0 0 0 0 16h8v136h-8a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h8a48 48 0 0 0 18.48-92.3M88 56h52a28 28 0 0 1 0 56H88Zm64 136H88v-64h64a32 32 0 0 1 0 64" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyBtcDuotone))
export { Memo as IconCurrencyBtcDuotone }
