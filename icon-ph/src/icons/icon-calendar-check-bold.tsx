/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCalendarCheckBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M68 52a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16v24H52V52ZM52 204V100h152v104Zm120.49-84.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 159l39.51-39.52a12 12 0 0 1 16.98.03"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCalendarCheckBold))
export { Memo as IconCalendarCheckBold }
