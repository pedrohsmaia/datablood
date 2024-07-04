/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKanbanBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H40a12 12 0 0 0-12 12v152a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-44h40v12a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12m-12 64h-32V68h32ZM84 68v40H52V68Zm0 136H52v-72h32Zm24-64V68h40v72Zm64 32v-40h32v40Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKanbanBold))
export { Memo as IconKanbanBold }
