/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBatteryPlusVerticalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-32 80h-24v-24a4 4 0 0 0-8 0v24h-24a4 4 0 0 0 0 8h24v24a4 4 0 0 0 8 0v-24h24a4 4 0 0 0 0-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBatteryPlusVerticalThin))
export { Memo as IconBatteryPlusVerticalThin }
