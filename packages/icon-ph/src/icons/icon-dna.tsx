/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDna = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5m-40-4.5H72.17a63.59 63.59 0 0 1 3.23-16h72.71a8 8 0 0 0 0-16H83.46a63.71 63.71 0 0 1 14.65-15.08A8 8 0 1 0 88.64 140 80.27 80.27 0 0 0 56 204.5V232a8 8 0 0 0 16 0v-16h88a8 8 0 0 0 0-16m32-184a8 8 0 0 0-8 8v16H96a8 8 0 0 0 0 16h87.83a63.59 63.59 0 0 1-3.23 16h-72.71a8 8 0 1 0 0 16h64.65a63.71 63.71 0 0 1-14.65 15.08 8 8 0 0 0 9.47 12.9A80.27 80.27 0 0 0 200 51.5V24a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDna))
export { Memo as IconDna }
