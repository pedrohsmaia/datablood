/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTipiBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m242.11 209.53-99.86-156 19.86-31a12 12 0 1 0-20.22-13L128 31.24 114.11 9.53a12 12 0 0 0-20.22 12.94l19.86 31-99.86 156A12 12 0 0 0 24 228h208a12 12 0 0 0 10.11-18.47M96.17 204 128 154.26 159.83 204Zm92.16 0-50.22-78.47a12 12 0 0 0-20.22 0L67.67 204H45.93L128 75.76 210.07 204Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTipiBold))
export { Memo as IconTipiBold }
