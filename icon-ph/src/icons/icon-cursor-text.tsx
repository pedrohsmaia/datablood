/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCursorText = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M184 208a8 8 0 0 1-8 8h-16a40 40 0 0 1-32-16 40 40 0 0 1-32 16H80a8 8 0 0 1 0-16h16a24 24 0 0 0 24-24v-40h-16a8 8 0 0 1 0-16h16V80a24 24 0 0 0-24-24H80a8 8 0 0 1 0-16h16a40 40 0 0 1 32 16 40 40 0 0 1 32-16h16a8 8 0 0 1 0 16h-16a24 24 0 0 0-24 24v40h16a8 8 0 0 1 0 16h-16v40a24 24 0 0 0 24 24h16a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCursorText))
export { Memo as IconCursorText }
