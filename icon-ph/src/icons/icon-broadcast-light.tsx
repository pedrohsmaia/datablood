/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBroadcastLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 90a38 38 0 1 0 38 38 38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26m78-26a77.74 77.74 0 0 1-19.86 52 6 6 0 0 1-8.94-8 65.93 65.93 0 0 0 0-88 6 6 0 1 1 8.94-8A77.74 77.74 0 0 1 206 128M67.18 102.31A65.93 65.93 0 0 0 78.8 172a6 6 0 0 1-.47 8.47 6 6 0 0 1-8.47-.47 77.93 77.93 0 0 1 0-104 6 6 0 1 1 8.94 8 66.21 66.21 0 0 0-11.62 18.31M246 128a117.71 117.71 0 0 1-33.71 82.58 6 6 0 0 1-8.58-8.4 105.88 105.88 0 0 0 0-148.36 6 6 0 0 1 8.58-8.4A117.71 117.71 0 0 1 246 128M52.29 202.18a6 6 0 0 1-8.58 8.4 117.92 117.92 0 0 1 0-165.16 6 6 0 1 1 8.58 8.4 105.88 105.88 0 0 0 0 148.36"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBroadcastLight))
export { Memo as IconBroadcastLight }
