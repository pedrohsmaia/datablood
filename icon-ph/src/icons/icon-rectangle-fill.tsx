/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Rect } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRectangleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Rect
        width={208}
        height={176}
        x={24}
        y={40}
        fill="currentColor"
        rx={16}
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRectangleFill))
export { Memo as IconRectangleFill }
