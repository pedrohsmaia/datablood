/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyBtcBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M177.08 114.46A48 48 0 0 0 152 37.52V24a12 12 0 0 0-24 0v12h-16V24a12 12 0 0 0-24 0v12H64a12 12 0 0 0 0 24h4v128h-4a12 12 0 0 0 0 24h24v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12a52 52 0 0 0 25.08-97.54M164 84a24 24 0 0 1-24 24H92V60h48a24 24 0 0 1 24 24m-12 104H92v-56h60a28 28 0 0 1 0 56"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyBtcBold))
export { Memo as IconCurrencyBtcBold }
