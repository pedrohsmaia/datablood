/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGifThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M140 72v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m84-4h-48a4 4 0 0 0-4 4v112a4 4 0 0 0 8 0v-52h36a4 4 0 0 0 0-8h-36V76h44a4 4 0 0 0 0-8M96 124H72a4 4 0 0 0 0 8h20v20a28 28 0 0 1-56 0v-48a28 28 0 0 1 28-28c13 0 25 9 28.13 21a4 4 0 1 0 7.74-2C95.85 79.36 80.76 68 64 68a36 36 0 0 0-36 36v48a36 36 0 0 0 72 0v-24a4 4 0 0 0-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGifThin))
export { Memo as IconGifThin }
