/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHTwoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0m84 140h-24l28.74-38.33A36 36 0 1 0 182.05 124a12 12 0 0 0 22.63 8 11.67 11.67 0 0 1 1.73-3.22 12 12 0 1 1 19.15 14.46L182.4 200.8A12 12 0 0 0 192 220h48a12 12 0 0 0 0-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHTwoBold))
export { Memo as IconTextHTwoBold }
