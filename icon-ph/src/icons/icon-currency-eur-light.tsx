/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyEurLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M188.47 193.66a6 6 0 0 1-.47 8.48A78 78 0 0 1 58.25 150H40a6 6 0 0 1 0-12h18v-20H40a6 6 0 0 1 0-12h18.25A78 78 0 0 1 188 53.86a6 6 0 0 1-8 9A66 66 0 0 0 70.29 106H136a6 6 0 0 1 0 12H70v20h50a6 6 0 0 1 0 12H70.29A66 66 0 0 0 180 193.2a6 6 0 0 1 8.47.46"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyEurLight))
export { Memo as IconCurrencyEurLight }
