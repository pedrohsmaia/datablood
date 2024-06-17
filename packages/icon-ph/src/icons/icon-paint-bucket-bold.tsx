/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaintBucketBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M231.5 162.63a12 12 0 0 0-15 0C214 164.64 192 183 192 208a32 32 0 0 0 64 0c0-25-22-43.36-24.5-45.37M224 216a8 8 0 0 1-8-8c0-6.8 3.91-13.64 8-18.83 4.07 5.17 8 12 8 18.83a8 8 0 0 1-8 8m8.49-101L125 7.51a12 12 0 0 0-17 0L70.25 45.29 48.48 23.51a12 12 0 1 0-17 17l21.8 21.75-41.08 41.08a28 28 0 0 0 0 39.6l84.86 84.86a28 28 0 0 0 39.6 0l95.83-95.8a12 12 0 0 0 0-17m-112.8 95.83a4 4 0 0 1-5.66 0L29.17 126a4 4 0 0 1 0-5.66l41.08-41.11 21.27 21.26a36 36 0 1 0 17-17L87.23 62.26 116.52 33 207 123.48ZM124 104a12 12 0 1 1-12 12 12 12 0 0 1 12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaintBucketBold))
export { Memo as IconPaintBucketBold }
