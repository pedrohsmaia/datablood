/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyDollarSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M204 168a52.06 52.06 0 0 1-52 52h-12v12a12 12 0 0 1-24 0v-12h-12a52.06 52.06 0 0 1-52-52 12 12 0 0 1 24 0 28 28 0 0 0 28 28h48a28 28 0 0 0 0-56h-40a52 52 0 0 1 0-104h4V24a12 12 0 0 1 24 0v12h4a52.06 52.06 0 0 1 52 52 12 12 0 0 1-24 0 28 28 0 0 0-28-28h-32a28 28 0 0 0 0 56h40a52.06 52.06 0 0 1 52 52"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyDollarSimpleBold))
export { Memo as IconCurrencyDollarSimpleBold }
