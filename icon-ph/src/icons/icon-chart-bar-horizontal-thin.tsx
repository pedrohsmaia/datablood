/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartBarHorizontalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 100h-44V56a4 4 0 0 0-4-4H44V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-12h92a4 4 0 0 0 4-4v-44h76a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-52-40v40H44V60Zm-32 136H44v-40h88Zm80-48H44v-40h168Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartBarHorizontalThin))
export { Memo as IconChartBarHorizontalThin }
