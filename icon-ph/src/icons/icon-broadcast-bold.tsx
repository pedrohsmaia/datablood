/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBroadcastBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 84a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20 20 20 0 0 1-20 20m77.39 12.7a83.94 83.94 0 0 1-14.78 23.3 12 12 0 0 1-17.89-16 59.92 59.92 0 0 0 0-80 12 12 0 0 1 17.89-16 84.07 84.07 0 0 1 14.78 88.7M83.28 168a12 12 0 0 1-17.89 16 83.94 83.94 0 0 1 0-112 12 12 0 0 1 17.89 16 59.92 59.92 0 0 0 0 80M252 128a123.63 123.63 0 0 1-35.43 86.78A12 12 0 1 1 199.43 198a99.88 99.88 0 0 0 0-140 12 12 0 0 1 17.14-16.8A123.63 123.63 0 0 1 252 128M56.57 198a12 12 0 0 1-17.14 16.8 123.89 123.89 0 0 1 0-173.56A12 12 0 0 1 56.57 58a99.88 99.88 0 0 0 0 140"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBroadcastBold))
export { Memo as IconBroadcastBold }
