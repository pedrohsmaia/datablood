/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmReelDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96M80 144a16 16 0 1 1 16-16 16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16m0-96a16 16 0 1 1 16-16 16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16"
          opacity={0.2}
        />
        <Path d="M224 216h-40.64A103.95 103.95 0 1 0 128 232h96a8 8 0 0 0 0-16M40 128a88 88 0 1 1 88 88 88.1 88.1 0 0 1-88-88m88-24a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8 8 8 0 0 1 8-8m24 104a24 24 0 1 0-24 24 24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8m56-24a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8 8 8 0 0 1 8-8m-96-16a24 24 0 1 0 24 24 24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8 8 8 0 0 1-8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFilmReelDuotone))
export { Memo as IconFilmReelDuotone }
