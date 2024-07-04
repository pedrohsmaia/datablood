/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBellSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M225.29 165.93C216.61 151 212 129.57 212 104a84 84 0 0 0-168 0c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.07 20.07A19.77 19.77 0 0 0 48 196h160a19.77 19.77 0 0 0 17.31-10 20.08 20.08 0 0 0-.02-20.07M54.66 172C63.51 154 68 131.14 68 104a60 60 0 0 1 120 0c0 27.13 4.48 50 13.33 68ZM172 224a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBellSimpleBold))
export { Memo as IconBellSimpleBold }
