/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesThreeDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M128 112a36 36 0 1 1 36-36 36 36 0 0 1-36 36m60 24a36 36 0 1 0 36 36 36 36 0 0 0-36-36m-120 0a36 36 0 1 0 36 36 36 36 0 0 0-36-36"
          opacity={0.2}
        />
        <Path d="M172 76a44 44 0 1 0-44 44 44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28 28 28 0 0 1-28 28m60 24a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28 28 28 0 0 1-28 28M68 128a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m0 72a28 28 0 1 1 28-28 28 28 0 0 1-28 28" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesThreeDuotone))
export { Memo as IconCirclesThreeDuotone }
