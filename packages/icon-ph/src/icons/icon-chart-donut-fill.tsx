/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartDonutFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M24.75 115.54a102.31 102.31 0 0 1 23.31-53.76 16 16 0 0 1 23.63-1.1l27.67 28.26a15.87 15.87 0 0 1 1.69 20.48 25.59 25.59 0 0 0-3.7 7.75 4 4 0 0 1-3.82 2.83h-64.8a4 4 0 0 1-3.98-4.46m112.64-91.48A16 16 0 0 0 120 40v40.67a15.86 15.86 0 0 0 13.25 15.76 32 32 0 0 1 5.41 61.76A4.06 4.06 0 0 0 136 162v65.23a4 4 0 0 0 4.46 4A104.34 104.34 0 0 0 232 129.48c.75-54.29-40.81-100.6-94.61-105.42m-20.14 134.1a32 32 0 0 1-19.4-19.42 4.06 4.06 0 0 0-3.8-2.74H28.72a4 4 0 0 0-4 4.45 104.1 104.1 0 0 0 90.82 90.82 4 4 0 0 0 4.45-4V162a4.05 4.05 0 0 0-2.74-3.84"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartDonutFill))
export { Memo as IconChartDonutFill }
