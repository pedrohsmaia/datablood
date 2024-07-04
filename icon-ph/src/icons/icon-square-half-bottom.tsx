/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareHalfBottom = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v64H56V56Zm-96 80v64H88v-64Zm16 0h16v64h-16Zm32 0h16v64h-16Zm-96 0h16v64H56Zm144 64h-16v-64h16z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSquareHalfBottom))
export { Memo as IconSquareHalfBottom }
