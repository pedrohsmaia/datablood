/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStackSimple = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m12 111 112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9m116-61.79L223.87 104 128 158.79 32.13 104ZM246.94 140a8 8 0 0 1-2.94 11l-112 64a8 8 0 0 1-7.94 0L12 151a8 8 0 0 1 8-13.95l108 61.74 108-61.74a8 8 0 0 1 10.94 2.95"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStackSimple))
export { Memo as IconStackSimple }
