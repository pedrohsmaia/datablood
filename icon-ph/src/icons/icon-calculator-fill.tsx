/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCalculatorFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M88 200a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12 12 12 0 0 1-12 12m40 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12 12 12 0 0 1-12 12m40 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12 12 12 0 0 1-12 12m16-56a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCalculatorFill))
export { Memo as IconCalculatorFill }
