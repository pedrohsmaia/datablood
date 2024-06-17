/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBroadcast = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 88a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24m73.71 7.14a80 80 0 0 1-14.08 22.2 8 8 0 0 1-11.92-10.67 63.95 63.95 0 0 0 0-85.33 8 8 0 1 1 11.92-10.67 80.08 80.08 0 0 1 14.08 84.47M69 103.09a64 64 0 0 0 11.26 67.58 8 8 0 0 1-11.92 10.67 79.93 79.93 0 0 1 0-106.67 8 8 0 1 1 11.95 10.67A63.77 63.77 0 0 0 69 103.09M248 128a119.58 119.58 0 0 1-34.29 84 8 8 0 1 1-11.42-11.2 103.9 103.9 0 0 0 0-145.56A8 8 0 1 1 213.71 44 119.58 119.58 0 0 1 248 128M53.71 200.78A8 8 0 1 1 42.29 212a119.87 119.87 0 0 1 0-168 8 8 0 1 1 11.42 11.2 103.9 103.9 0 0 0 0 145.56Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBroadcast))
export { Memo as IconBroadcast }
