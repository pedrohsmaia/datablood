/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconControlDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M200 120H56l72-72Z" opacity={0.2} />
        <Path d="m205.66 114.34-72-72a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 128h144a8 8 0 0 0 5.66-13.66M75.31 112 128 59.31 180.69 112Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconControlDuotone))
export { Memo as IconControlDuotone }
