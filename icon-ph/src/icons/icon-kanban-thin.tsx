/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKanbanThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 52H40a4 4 0 0 0-4 4v152a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-52h56v20a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4M92 208a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-84h48Zm0-92H44V60h48Zm64 32h-56V60h56Zm56 28a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4v-52h48Zm0-60h-48V60h48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKanbanThin))
export { Memo as IconKanbanThin }
