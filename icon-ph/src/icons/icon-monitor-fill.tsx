/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Rect, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMonitorFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Rect width={208} height={160} x={24} y={40} rx={24} />
        <Path d="M160 216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMonitorFill))
export { Memo as IconMonitorFill }
