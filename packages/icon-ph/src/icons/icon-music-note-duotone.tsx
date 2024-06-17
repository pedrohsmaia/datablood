/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMusicNoteDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M128 184a40 40 0 1 1-40-40 40 40 0 0 1 40 40" opacity={0.2} />
        <Path d="m210.3 56.34-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V98.75l69.7 20.91A8 8 0 0 0 216 112V64a8 8 0 0 0-5.7-7.66M88 216a32 32 0 1 1 32-32 32 32 0 0 1-32 32m112-114.75-64-19.2v-31.3L200 70Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMusicNoteDuotone))
export { Memo as IconMusicNoteDuotone }
