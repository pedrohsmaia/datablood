/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoonBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15 108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.09 107.09 0 0 0 64.93-21.69 108.86 108.86 0 0 0 38.44-54.94 12 12 0 0 0-3-11.97m-49.88 47.74A84 84 0 0 1 68.86 69.51a84.93 84.93 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.79 84.79 0 0 1-21.22 23.41"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMoonBold))
export { Memo as IconMoonBold }
