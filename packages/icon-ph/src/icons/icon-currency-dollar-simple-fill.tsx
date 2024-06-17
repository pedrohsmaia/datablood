/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyDollarSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m20 168h-12v8a8 8 0 0 1-16 0v-8h-8a36 36 0 0 1-36-36 8 8 0 0 1 16 0 20 20 0 0 0 20 20h36a20 20 0 0 0 0-40h-32a36 36 0 0 1 0-72h4v-8a8 8 0 0 1 16 0v8h4a36 36 0 0 1 36 36 8 8 0 0 1-16 0 20 20 0 0 0-20-20h-24a20 20 0 0 0 0 40h32a36 36 0 0 1 0 72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyDollarSimpleFill))
export { Memo as IconCurrencyDollarSimpleFill }
