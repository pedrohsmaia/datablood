/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFireLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M181.92 153A55.58 55.58 0 0 1 137 197.92a7 7 0 0 1-1 .08 6 6 0 0 1-1-11.92c17.38-2.92 32.13-17.68 35.08-35.08a6 6 0 1 1 11.84 2m32.08-9a86 86 0 0 1-172 0c0-27.47 10.85-55.61 32.25-83.64a6 6 0 0 1 9-.67l26.34 25.56 23.09-63.31a6 6 0 0 1 9.47-2.56C163.72 37.33 214 85.4 214 144m-12 0c0-48.4-38.65-89.84-61.07-109.8l-23.29 63.86a6 6 0 0 1-9.82 2.25l-28-27.22C62.67 97.13 54 121 54 144a74 74 0 0 0 148 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFireLight))
export { Memo as IconFireLight }
