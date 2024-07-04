/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPasswordDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M248 64v128a8 8 0 0 1-8 8H40V56h200a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M48 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m84 54.5-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.5a8 8 0 0 0-5 15.22l20 6.49-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17 12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17 20-6.49A8 8 0 0 0 132 110.5m106 5.14a8 8 0 0 0-10-5.14l-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.49a8 8 0 0 0-4.95 15.22l20 6.49-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17 12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17 20-6.49a8 8 0 0 0 5.07-10.09" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPasswordDuotone))
export { Memo as IconPasswordDuotone }
