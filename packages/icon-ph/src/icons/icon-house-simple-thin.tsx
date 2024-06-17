/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHouseSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m216.13 106.72-80-75.54-.05-.05a12 12 0 0 0-16.2.05l-79.95 75.49a12 12 0 0 0-3.93 8.87V208a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-92.46a12 12 0 0 0-3.87-8.82M212 208a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-92.46a4.09 4.09 0 0 1 1.36-3l79.94-75.49a4 4 0 0 1 5.36 0l80 75.55a4 4 0 0 1 1.31 3Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHouseSimpleThin))
export { Memo as IconHouseSimpleThin }
