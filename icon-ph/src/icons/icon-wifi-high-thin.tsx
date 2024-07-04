/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWifiHighThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8m98.54-113.9a168 168 0 0 0-213.08 0 4 4 0 1 0 5.08 6.18 160 160 0 0 1 202.92 0 4 4 0 0 0 5.08-6.18m-32.06 35.81a120 120 0 0 0-149 0 4 4 0 0 0 5 6.27 112 112 0 0 1 139 0 4 4 0 0 0 5-6.27m-32.13 35.86a72 72 0 0 0-84.7 0 4 4 0 1 0 4.7 6.46 64.07 64.07 0 0 1 75.3 0 4 4 0 0 0 5.58-.87 4 4 0 0 0-.88-5.59"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWifiHighThin))
export { Memo as IconWifiHighThin }
