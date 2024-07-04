/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDeviceTabletDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M208 64v128H48V64Z" opacity={0.2} />
        <Path d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24M56 72h144v112H56Zm8-32h128a8 8 0 0 1 8 8v8H56v-8a8 8 0 0 1 8-8m128 176H64a8 8 0 0 1-8-8v-8h144v8a8 8 0 0 1-8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDeviceTabletDuotone))
export { Memo as IconDeviceTabletDuotone }
