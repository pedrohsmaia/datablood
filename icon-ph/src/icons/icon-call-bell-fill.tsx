/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCallBellFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M16 176a8 8 0 0 1 8-8h8v-16a96.12 96.12 0 0 1 88-95.66V40h-16a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16h-16v16.34A96.12 96.12 0 0 1 224 152v16h8a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8m216 24H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCallBellFill))
export { Memo as IconCallBellFill }
