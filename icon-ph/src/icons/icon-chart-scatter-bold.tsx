/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartScatterBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v148h180a12 12 0 0 1 12 12m-120-60a16 16 0 1 0 16-16 16 16 0 0 0-16 16m-8-40a16 16 0 1 0-16-16 16 16 0 0 0 16 16m-32 72a16 16 0 1 0-16-16 16 16 0 0 0 16 16m96-48a16 16 0 1 0-16-16 16 16 0 0 0 16 16m24-40a16 16 0 1 0-16-16 16 16 0 0 0 16 16m-24 72a16 16 0 1 0 16-16 16 16 0 0 0-16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartScatterBold))
export { Memo as IconChartScatterBold }
