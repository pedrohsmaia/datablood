/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSignpostDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m240 112-36 40H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h164Z"
          opacity={0.2}
        />
        <Path d="m246 106.65-36-40a8 8 0 0 0-6-2.65h-68V32a8 8 0 0 0-16 0v32H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h80v64a8 8 0 0 0 16 0v-64h68a8 8 0 0 0 5.95-2.65l36-40a8 8 0 0 0 .05-10.7M200.44 144H40V80h160.44l28.8 32Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSignpostDuotone))
export { Memo as IconSignpostDuotone }
