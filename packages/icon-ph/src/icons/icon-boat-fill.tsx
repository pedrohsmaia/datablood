/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBoatFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M221.06 110.63 208 106.27V56a16 16 0 0 0-16-16h-56V24a8 8 0 0 0-16 0v16H64a16 16 0 0 0-16 16v50.27l-13.06 4.36A16 16 0 0 0 24 125.82v34.28a7.73 7.73 0 0 0 .31 2.19c15.72 55.09 86.12 74.06 100.07 77.3a16.19 16.19 0 0 0 7.24 0c13.95-3.24 84.35-22.21 100.07-77.3a7.73 7.73 0 0 0 .31-2.19v-34.28a16 16 0 0 0-10.94-15.19M136 168a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0Zm56-67.07-61.47-20.52a8 8 0 0 0-5.06 0L64 100.93V56h128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBoatFill))
export { Memo as IconBoatFill }
