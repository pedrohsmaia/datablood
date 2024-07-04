/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBatteryChargingVerticalBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M154.21 133.69a12 12 0 0 1 .52 11.68l-16 32a12 12 0 1 1-21.46-10.74l7.31-14.63H112a12 12 0 0 1-10.73-17.37l16-32a12 12 0 1 1 21.46 10.74L131.42 128H144a12 12 0 0 1 10.21 5.69M104 24h48a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24m100 36v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBatteryChargingVerticalBold))
export { Memo as IconBatteryChargingVerticalBold }
