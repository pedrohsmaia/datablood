/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyGbpThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M188 208a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h4a32 32 0 0 0 32-32v-40H56a4 4 0 0 1 0-8h36V84a48 48 0 0 1 78.53-37 4 4 0 1 1-5.09 6.17A40 40 0 0 0 100 84v40h36a4 4 0 0 1 0 8h-36v40a40 40 0 0 1-16 32h100a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyGbpThin))
export { Memo as IconCurrencyGbpThin }
