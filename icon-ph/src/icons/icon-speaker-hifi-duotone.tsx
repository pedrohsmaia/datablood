/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerHifiDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M192 32H64a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-64 152a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
          opacity={0.2}
        />
        <Path d="M192 24H64a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H64V40h128ZM116 76a12 12 0 1 1 12 12 12 12 0 0 1-12-12m12 116a40 40 0 1 0-40-40 40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24 24 24 0 0 1 24-24" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerHifiDuotone))
export { Memo as IconSpeakerHifiDuotone }
