/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCursorTextFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-64 88a8 8 0 0 1 0 16h-8v24a16 16 0 0 0 16 16h8a8 8 0 0 1 0 16h-8a31.92 31.92 0 0 1-24-10.87A31.92 31.92 0 0 1 104 192h-8a8 8 0 0 1 0-16h8a16 16 0 0 0 16-16v-24h-8a8 8 0 0 1 0-16h8V96a16 16 0 0 0-16-16h-8a8 8 0 0 1 0-16h8a31.92 31.92 0 0 1 24 10.87A31.92 31.92 0 0 1 152 64h8a8 8 0 0 1 0 16h-8a16 16 0 0 0-16 16v24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCursorTextFill))
export { Memo as IconCursorTextFill }
