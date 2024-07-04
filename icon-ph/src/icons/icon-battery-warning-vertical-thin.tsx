/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBatteryWarningVerticalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M124 136V96a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8 8 8 0 0 0-8-8M96 12h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m100 44v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBatteryWarningVerticalThin))
export { Memo as IconBatteryWarningVerticalThin }
