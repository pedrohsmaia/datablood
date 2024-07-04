/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Rect, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconQrCodeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Rect width={80} height={80} x={40} y={40} rx={16} />
        <Rect width={80} height={80} x={40} y={136} rx={16} />
        <Rect width={80} height={80} x={136} y={40} rx={16} />
        <Path d="M144 184a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8" />
        <Path d="M208 152h-24v-8a8 8 0 0 0-16 0v56h-24a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8v-40h24a8 8 0 0 0 0-16m0 32a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconQrCodeFill))
export { Memo as IconQrCodeFill }
