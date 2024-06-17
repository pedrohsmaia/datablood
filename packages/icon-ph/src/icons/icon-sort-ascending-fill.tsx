/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSortAscendingFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 128a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8M48 72h136a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16m56 112H48a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16m127.39-19.06A8 8 0 0 0 224 160h-32v-48a8 8 0 0 0-16 0v48h-32a8 8 0 0 0-5.66 13.66l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 1.73-8.72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSortAscendingFill))
export { Memo as IconSortAscendingFill }
