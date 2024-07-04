/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWebcamFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 104a32 32 0 1 1-32-32 32 32 0 0 1 32 32m72 104a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h88v-16.4a80 80 0 1 1 16 0V200h88a8 8 0 0 1 8 8m-104-56a48 48 0 1 0-48-48 48.05 48.05 0 0 0 48 48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWebcamFill))
export { Memo as IconWebcamFill }
