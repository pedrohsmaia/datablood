/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaintBrushBroadFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 24H72a40 40 0 0 0-40 40v72a24 24 0 0 0 24 24h48l-7.89 46.67A8.42 8.42 0 0 0 96 208a32 32 0 0 0 64 0 8.42 8.42 0 0 0-.11-1.33L152 160h48a24 24 0 0 0 24-24V32a8 8 0 0 0-8-8M72 40h104v40a8 8 0 0 0 16 0V40h16v72H48V64a24 24 0 0 1 24-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaintBrushBroadFill))
export { Memo as IconPaintBrushBroadFill }
