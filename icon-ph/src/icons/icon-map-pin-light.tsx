/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapPinLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 66a38 38 0 1 0 38 38 38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26m0-112a86.1 86.1 0 0 0-86 86c0 30.91 14.34 63.74 41.47 94.94a252.32 252.32 0 0 0 41.09 38 6 6 0 0 0 6.88 0 252.32 252.32 0 0 0 41.09-38c27.13-31.2 41.47-64 41.47-94.94a86.1 86.1 0 0 0-86-86m0 206.51C113 212.93 54 163.62 54 104a74 74 0 0 1 148 0c0 59.62-59 108.93-74 120.51"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMapPinLight))
export { Memo as IconMapPinLight }
