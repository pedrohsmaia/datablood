/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHardDrivesDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 152v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8m-8-104H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8"
          opacity={0.2}
        />
        <Path d="M208 136H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64H48v-48h160zm0-160H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64H48V56h160zm-16-24a12 12 0 1 1-12-12 12 12 0 0 1 12 12m0 96a12 12 0 1 1-12-12 12 12 0 0 1 12 12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHardDrivesDuotone))
export { Memo as IconHardDrivesDuotone }
