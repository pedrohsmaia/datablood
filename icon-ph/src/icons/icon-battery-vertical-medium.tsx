/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBatteryVerticalMedium = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 32H80a24 24 0 0 0-24 24v168a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m8 192a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Zm-16-24a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m80 152a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBatteryVerticalMedium))
export { Memo as IconBatteryVerticalMedium }
