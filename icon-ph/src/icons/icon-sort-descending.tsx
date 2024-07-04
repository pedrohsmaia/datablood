/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSortDescending = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M40 128a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8m8-56h56a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16m136 112H48a8 8 0 0 0 0 16h136a8 8 0 0 0 0-16m45.66-101.66-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32L176 67.31V144a8 8 0 0 0 16 0V67.31l26.34 26.35a8 8 0 0 0 11.32-11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSortDescending))
export { Memo as IconSortDescending }
