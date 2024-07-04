/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextColumnsDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M216 64v120H40V64Z" opacity={0.2} />
        <Path d="M120 64a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8m-8 32H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m32-104h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16m72 24h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 40h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTextColumnsDuotone))
export { Memo as IconTextColumnsDuotone }
