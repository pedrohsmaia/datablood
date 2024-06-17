/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCalendarThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-100-92v64a4 4 0 0 1-8 0v-57.53l-10.21 5.11a4 4 0 0 1-3.58-7.16l16-8A4 4 0 0 1 108 120m60 28-24 32h24a4 4 0 0 1 0 8h-32a4 4 0 0 1-3.2-6.4l28.78-38.37A11.88 11.88 0 0 0 164 136a12 12 0 0 0-22.4-6 4 4 0 0 1-6.92-4A20 20 0 0 1 172 136a19.79 19.79 0 0 1-4 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCalendarThin))
export { Memo as IconCalendarThin }
