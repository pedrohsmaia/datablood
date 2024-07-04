/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSortDescendingLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M42 128a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12H48a6 6 0 0 1-6-6m6-58h56a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12m136 116H48a6 6 0 0 0 0 12h136a6 6 0 0 0 0-12m44.24-102.24-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 8.48 8.48L178 62.49V144a6 6 0 0 0 12 0V62.49l29.76 29.75a6 6 0 0 0 8.48-8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSortDescendingLight))
export { Memo as IconSortDescendingLight }
