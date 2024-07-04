/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapPinThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 68a36 36 0 1 0 36 36 36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28m0-112a84.09 84.09 0 0 0-84 84c0 30.42 14.17 62.79 41 93.62a250 250 0 0 0 40.73 37.66 4 4 0 0 0 4.58 0A250 250 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84.09 84.09 0 0 0-84-84m37.1 172.23A254.62 254.62 0 0 1 128 227a254.62 254.62 0 0 1-37.1-34.81C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMapPinThin))
export { Memo as IconMapPinThin }
