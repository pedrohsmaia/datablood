/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSquareInThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M124 136v64a4 4 0 0 1-8 0v-54.34l-73.17 73.17a4 4 0 0 1-5.66-5.66L110.34 140H56a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m84-100H80a12 12 0 0 0-12 12v48a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v128a4 4 0 0 1-4 4h-48a4 4 0 0 0 0 8h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSquareInThin))
export { Memo as IconArrowSquareInThin }
