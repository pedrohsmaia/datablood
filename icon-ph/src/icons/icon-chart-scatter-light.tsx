/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartScatterLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v154h186a6 6 0 0 1 6 6m-98-50a10 10 0 1 0-10-10 10 10 0 0 0 10 10m-24-56a10 10 0 1 0-10-10 10 10 0 0 0 10 10m-32 72a10 10 0 1 0-10-10 10 10 0 0 0 10 10m96-48a10 10 0 1 0-10-10 10 10 0 0 0 10 10m24-40a10 10 0 1 0-10-10 10 10 0 0 0 10 10m-8 68a10 10 0 1 0 10 10 10 10 0 0 0-10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartScatterLight))
export { Memo as IconChartScatterLight }
