/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartBarHorizontalFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 112v32a8 8 0 0 1-8 8H48v16h88a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H48v8a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v8h120a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H48v16h168a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartBarHorizontalFill))
export { Memo as IconChartBarHorizontalFill }
