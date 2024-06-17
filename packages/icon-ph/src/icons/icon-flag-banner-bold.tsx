/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlagBannerBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M234.15 49.59A12 12 0 0 0 224 44H32a12 12 0 0 0-8.11 20.85L63 100.71l-39.82 43.15A12 12 0 0 0 32 164h127.28l-26.11 54.84a12 12 0 1 0 21.66 10.32l80-168a12 12 0 0 0-.68-11.57M170.71 140H59.41l29.41-31.86a12 12 0 0 0-.71-17L62.85 68H205Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFlagBannerBold))
export { Memo as IconFlagBannerBold }
