/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinuxLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M161.22 217.74a4 4 0 0 1-3.31 6.26H98.1a4 4 0 0 1-3.31-6.26 40 40 0 0 1 66.43 0m68.93 3.37a8.29 8.29 0 0 1-6.43 2.89h-39.16a4 4 0 0 1-3.76-2.65 56 56 0 0 0-105.59 0 4 4 0 0 1-3.76 2.65H32.23a8.2 8.2 0 0 1-6.42-2.93 8 8 0 0 1-.06-10.07c.06-.07 7.64-9.78 15.12-28.72C47.77 164.8 56 135.64 56 96a72 72 0 0 1 144 0c0 39.64 8.23 68.8 15.13 86.28 7.48 18.94 15.06 28.65 15.13 28.74a8 8 0 0 1-.11 10.09M88 108a12 12 0 1 0 12-12 12 12 0 0 0-12 12m79.16 32.42a8 8 0 0 0-10.73-3.58L128 151.06l-28.42-14.22a8 8 0 0 0-7.15 14.32l32 16a8 8 0 0 0 7.15 0l32-16a8 8 0 0 0 3.58-10.74M168 108a12 12 0 1 0-12 12 12 12 0 0 0 12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLinuxLogoFill))
export { Memo as IconLinuxLogoFill }
