/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRewind = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M223.77 58a16 16 0 0 0-16.25.53L128 109.14v-37.3a15.91 15.91 0 0 0-24.48-13.34l-88.19 56.16a15.8 15.8 0 0 0 0 26.68l88.19 56.16A15.91 15.91 0 0 0 128 184.16v-37.3l79.52 50.64A15.91 15.91 0 0 0 232 184.16V71.84A15.83 15.83 0 0 0 223.77 58M112 183.93 24.18 128 112 72.06Zm104 0L128.18 128 216 72.06Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRewind))
export { Memo as IconRewind }
