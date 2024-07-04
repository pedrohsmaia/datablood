/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconListNumbersThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 128a4 4 0 0 1-4 4H104a4 4 0 0 1 0-8h112a4 4 0 0 1 4 4M104 68h112a4 4 0 0 0 0-8H104a4 4 0 0 0 0 8m112 120H104a4 4 0 0 0 0 8h112a4 4 0 0 0 0-8M41.79 51.58 52 46.47V104a4 4 0 0 0 8 0V40a4 4 0 0 0-5.79-3.58l-16 8a4 4 0 1 0 3.58 7.16M72 204H48l23.85-31.92a19.54 19.54 0 0 0 4-14.8 19.76 19.76 0 0 0-8-13.28 20.84 20.84 0 0 0-28.59 3.92 19.85 19.85 0 0 0-3 5.38 4 4 0 0 0 7.5 2.7 12.1 12.1 0 0 1 1.78-3.22 12.78 12.78 0 0 1 17.54-2.37 11.85 11.85 0 0 1 4.81 7.94 11.65 11.65 0 0 1-2.41 8.85L36.8 205.61A4 4 0 0 0 40 212h32a4 4 0 0 0 0-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconListNumbersThin))
export { Memo as IconListNumbersThin }
