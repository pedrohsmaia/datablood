/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWifiLowThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8m34.35-42.23a72 72 0 0 0-84.7 0 4 4 0 1 0 4.71 6.46 64 64 0 0 1 75.28 0 4 4 0 1 0 4.71-6.46"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWifiLowThin))
export { Memo as IconWifiLowThin }
