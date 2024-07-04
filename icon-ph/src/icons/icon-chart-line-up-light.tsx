/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartLineUpLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v113.52l53.76-53.76a6 6 0 0 1 8.48 0L128 135.51 185.52 78H160a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6v40a6 6 0 0 1-12 0V86.48l-61.76 61.76a6 6 0 0 1-8.48 0L96 120.49l-58 58V202h186a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartLineUpLight))
export { Memo as IconChartLineUpLight }
