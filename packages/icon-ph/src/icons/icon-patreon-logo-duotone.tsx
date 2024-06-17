/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPatreonLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 104a56 56 0 1 1-56-56 56 56 0 0 1 56 56M80 48H64a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8"
          opacity={0.2}
        />
        <Path d="M176 40a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48M80 40H64a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 168H64V56h16z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPatreonLogoDuotone))
export { Memo as IconPatreonLogoDuotone }
