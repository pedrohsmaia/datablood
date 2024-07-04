/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Rect, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVibrateFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Rect width={112} height={192} x={72} y={32} rx={24} />
        <Path d="M208 80a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32 16a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8M48 80a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M16 96a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconVibrateFill))
export { Memo as IconVibrateFill }
