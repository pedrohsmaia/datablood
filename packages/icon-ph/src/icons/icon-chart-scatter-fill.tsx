/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartScatterFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-28 32a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0 56a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-40-16a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-24-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-24 56a12 12 0 1 1-12 12 12 12 0 0 1 12-12m100 64H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v104h136a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartScatterFill))
export { Memo as IconChartScatterFill }
