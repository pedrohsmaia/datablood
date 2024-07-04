/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileLockDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M48 184h72v40H48ZM152 32v56h56Z" opacity={0.2} />
        <Path d="M120 176h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4H72Zm40 44H56v-24h56ZM213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-40a8 8 0 0 0 0 16h40a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31 188.69 80H160Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFileLockDuotone))
export { Memo as IconFileLockDuotone }
