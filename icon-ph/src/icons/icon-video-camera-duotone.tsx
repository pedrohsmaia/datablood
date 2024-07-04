/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVideoCameraDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M200 72v112a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95-32-21.33v-23.44L240 95Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconVideoCameraDuotone))
export { Memo as IconVideoCameraDuotone }
