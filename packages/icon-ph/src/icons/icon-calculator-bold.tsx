/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCalculatorBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM80 76a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24H92a12 12 0 0 1-12-12m40 52a16 16 0 1 1-16-16 16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-48 48a16 16 0 1 1-16-16 16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCalculatorBold))
export { Memo as IconCalculatorBold }
