/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOrangeSliceDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M216 88a88 88 0 0 1-176 0Z" opacity={0.2} />
        <Path d="M248 80H8a8 8 0 0 0-8 8 128 128 0 0 0 256 0 8 8 0 0 0-8-8M77.4 149.91l42.6-42.6v60.29a79.59 79.59 0 0 1-42.6-17.69M66.09 138.6A79.59 79.59 0 0 1 48.4 96h60.29ZM136 107.31l42.6 42.6A79.59 79.59 0 0 1 136 167.6Zm53.91 31.29L147.31 96h60.29a79.59 79.59 0 0 1-17.69 42.6M128 200A112.15 112.15 0 0 1 16.28 96h16.06a96 96 0 0 0 191.32 0h16.06A112.15 112.15 0 0 1 128 200" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconOrangeSliceDuotone))
export { Memo as IconOrangeSliceDuotone }
