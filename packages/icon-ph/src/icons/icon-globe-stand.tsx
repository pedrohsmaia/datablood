/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlobeStand = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 176a80 80 0 1 0-80-80 80.09 80.09 0 0 0 80 80m0-144a64 64 0 1 1-64 64 64.07 64.07 0 0 1 64-64m77.77 133.5a8 8 0 0 1-.23 11.32 111.24 111.24 0 0 1-69.54 30.9V224h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-16.29A112 112 0 0 1 47.18 18.46a8 8 0 1 1 11.54 11.08 96 96 0 0 0 135.74 135.74 8 8 0 0 1 11.31.22"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGlobeStand))
export { Memo as IconGlobeStand }
