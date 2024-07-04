/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAndroidLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180 156a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-88-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m152 28v24a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20v-22.87a117.35 117.35 0 0 1 33.72-82.44l-22.21-22.2a12 12 0 0 1 17-17L64.3 71.33A114.35 114.35 0 0 1 127.59 52h.41a115.15 115.15 0 0 1 63.89 19.14l23.62-23.63a12 12 0 0 1 17 17l-22 22A115.18 115.18 0 0 1 244 168m-24 0a92 92 0 0 0-92.33-92C77.12 76.18 36 118 36 169.13V188h184Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAndroidLogoBold))
export { Memo as IconAndroidLogoBold }
