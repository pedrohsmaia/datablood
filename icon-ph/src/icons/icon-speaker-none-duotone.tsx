/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerNoneDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M80 88v80H32a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8Z" opacity={0.2} />
        <Path d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64-56-43.57V91.94l56-43.58Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerNoneDuotone))
export { Memo as IconSpeakerNoneDuotone }
