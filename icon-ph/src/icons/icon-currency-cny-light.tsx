/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyCnyLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M58 64a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m158 106a6 6 0 0 0-6 6v18h-34a18 18 0 0 1-18-18v-50h50a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12h50v10a58.07 58.07 0 0 1-58 58 6 6 0 0 0 0 12 70.08 70.08 0 0 0 70-70v-10h36v50a30 30 0 0 0 30 30h40a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyCnyLight))
export { Memo as IconCurrencyCnyLight }
