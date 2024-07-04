/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFastForwardLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m239.59 116.35-88.18-56.17a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 130 71.84v41L47.41 60.18a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 26 71.84v112.32a13.83 13.83 0 0 0 7.19 12.12 14 14 0 0 0 14.22-.46L130 143.21v40.95a13.83 13.83 0 0 0 7.19 12.12 14 14 0 0 0 14.22-.46l88.18-56.17a13.79 13.79 0 0 0 0-23.3m-110.44 13.18L41 185.69a1.9 1.9 0 0 1-2 .06 1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59 2 2 0 0 1 1-.26 1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Zm104 0L145 185.69a1.9 1.9 0 0 1-2 .06 1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59 2 2 0 0 1 1-.26 1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFastForwardLight))
export { Memo as IconFastForwardLight }
