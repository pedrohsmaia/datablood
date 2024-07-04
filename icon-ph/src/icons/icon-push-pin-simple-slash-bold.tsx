/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPushPinSimpleSlashBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m216.88 207.93-160-176a12 12 0 1 0-17.76 16.14L62 73.19 45.93 164H40a12 12 0 0 0 0 24h76v52a12 12 0 0 0 24 0v-52h26.33l32.79 36.07a12 12 0 0 0 17.76-16.14M70.3 164l12.07-68.36L144.51 164ZM90.06 40a12 12 0 0 1 12-12H192a12 12 0 0 1 0 24h-1.7l15.33 86.84a12 12 0 0 1-9.73 13.91 12.59 12.59 0 0 1-2.1.18A12 12 0 0 1 182 143l-16.07-91h-63.87a12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPushPinSimpleSlashBold))
export { Memo as IconPushPinSimpleSlashBold }
