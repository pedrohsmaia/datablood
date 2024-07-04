/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Rect, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCardsFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Rect width={176} height={144} x={24} y={72} rx={16} />
        <Path d="M216 40H64a8 8 0 0 0 0 16h152v120a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCardsFill))
export { Memo as IconCardsFill }
