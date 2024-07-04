/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartLineDownFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56 26.34-26.35a8 8 0 0 1 11.32 0L180 136.69l14.34-14.35A8 8 0 0 1 208 128v40a8 8 0 0 1-8 8h-40a8 8 0 0 1-5.66-13.66L168.69 148 128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartLineDownFill))
export { Memo as IconChartLineDownFill }
