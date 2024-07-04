/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMopedFrontDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M152 168v48a24 24 0 0 1-48 0v-48a24 24 0 0 1 48 0m-24-88a32 32 0 1 0-32-32 32 32 0 0 0 32 32"
          opacity={0.2}
        />
        <Path d="M208 40h-40.8a40 40 0 0 0-78.4 0H48a8 8 0 0 0 0 16h40.8a40 40 0 0 0 12.58 21.82A64.08 64.08 0 0 0 64 136v64a16 16 0 0 0 16 16h16a32 32 0 0 0 64 0h16a16 16 0 0 0 16-16v-64a64.08 64.08 0 0 0-37.38-58.18A40 40 0 0 0 167.2 56H208a8 8 0 0 0 0-16m-64 176a16 16 0 0 1-32 0v-48a16 16 0 0 1 32 0Zm32-80v64h-16v-32a32 32 0 0 0-64 0v32H80v-64a48 48 0 0 1 96 0m-72-88a24 24 0 1 1 24 24 24 24 0 0 1-24-24" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMopedFrontDuotone))
export { Memo as IconMopedFrontDuotone }
