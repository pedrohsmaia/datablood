/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceTabletThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M52 68h152v120H52Zm12-32h128a12 12 0 0 1 12 12v12H52V48a12 12 0 0 1 12-12m128 184H64a12 12 0 0 1-12-12v-12h152v12a12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceTabletThin))
export { Memo as IconDeviceTabletThin }
