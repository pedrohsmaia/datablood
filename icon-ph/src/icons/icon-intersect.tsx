/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconIntersect = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M174.63 81.37a80 80 0 1 0-93.26 93.26 80 80 0 1 0 93.26-93.26M100.69 136 120 155.31A63.48 63.48 0 0 1 96 160a63.48 63.48 0 0 1 4.69-24m33.75 11.13-25.57-25.57a64.65 64.65 0 0 1 12.69-12.69l25.57 25.57a64.65 64.65 0 0 1-12.69 12.69M155.31 120 136 100.69A63.48 63.48 0 0 1 160 96a63.48 63.48 0 0 1-4.69 24M32 96a64 64 0 0 1 126-16 80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 128a64.11 64.11 0 0 1-62-48 80.08 80.08 0 0 0 78-78 64 64 0 0 1-16 126"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconIntersect))
export { Memo as IconIntersect }
