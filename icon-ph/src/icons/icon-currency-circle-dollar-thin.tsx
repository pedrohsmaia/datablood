/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyCircleDollarThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m36-72a24 24 0 0 1-24 24h-8v12a4 4 0 0 1-8 0v-12h-20a4 4 0 0 1 0-8h36a16 16 0 0 0 0-32h-24a24 24 0 0 1 0-48h8V72a4 4 0 0 1 8 0v12h20a4 4 0 0 1 0 8h-36a16 16 0 0 0 0 32h24a24 24 0 0 1 24 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyCircleDollarThin))
export { Memo as IconCurrencyCircleDollarThin }
