/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconElevatorBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-40 100v76h-28v-76Zm-52 76H88v-76h28Zm88 0h-12v-88a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v88H52V52h152ZM100 76a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconElevatorBold))
export { Memo as IconElevatorBold }
