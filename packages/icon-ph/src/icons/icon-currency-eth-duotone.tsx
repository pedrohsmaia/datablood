/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyEthDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m216 128-88 112-88-112 88 40Z" opacity={0.2} />
        <Path d="m222.29 123.06-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88M136 39.13l67.42 85.8L136 155.58Zm-16 116.45-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Zm16 0 53.43-24.29-53.43 68Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyEthDuotone))
export { Memo as IconCurrencyEthDuotone }
