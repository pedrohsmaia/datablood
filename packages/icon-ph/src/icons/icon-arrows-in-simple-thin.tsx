/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsInSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M210.83 50.83 153.66 108H192a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4V64a4 4 0 0 1 8 0v38.34l57.17-57.17a4 4 0 1 1 5.66 5.66M112 140H64a4 4 0 0 0 0 8h38.34l-57.17 57.17a4 4 0 0 0 5.66 5.66L108 153.66V192a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsInSimpleThin))
export { Memo as IconArrowsInSimpleThin }
