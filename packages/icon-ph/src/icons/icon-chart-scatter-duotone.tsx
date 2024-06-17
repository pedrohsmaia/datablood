/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartScatterDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M224 56v152H32V48h184a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v152h184a8 8 0 0 1 8 8m-100-48a12 12 0 1 0-12-12 12 12 0 0 0 12 12m-24-56a12 12 0 1 0-12-12 12 12 0 0 0 12 12m-32 72a12 12 0 1 0-12-12 12 12 0 0 0 12 12m96-48a12 12 0 1 0-12-12 12 12 0 0 0 12 12m24-40a12 12 0 1 0-12-12 12 12 0 0 0 12 12m-20 76a12 12 0 1 0 12-12 12 12 0 0 0-12 12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChartScatterDuotone))
export { Memo as IconChartScatterDuotone }
