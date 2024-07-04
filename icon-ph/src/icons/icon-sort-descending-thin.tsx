/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSortDescendingThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M44 128a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8H48a4 4 0 0 1-4-4m4-60h56a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8m136 120H48a4 4 0 0 0 0 8h136a4 4 0 0 0 0-8m42.83-102.83-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66L180 57.66V144a4 4 0 0 0 8 0V57.66l33.17 33.17a4 4 0 1 0 5.66-5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSortDescendingThin))
export { Memo as IconSortDescendingThin }
