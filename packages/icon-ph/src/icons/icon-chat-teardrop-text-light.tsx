/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTeardropTextLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M166 112a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m70-14a98.11 98.11 0 0 1-98 98H47.67A13.68 13.68 0 0 1 34 208.33V124a98 98 0 0 1 196 0m-12 0a86 86 0 0 0-172 0v84.33a1.67 1.67 0 0 0 1.67 1.67H132a86.1 86.1 0 0 0 86-86"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTeardropTextLight))
export { Memo as IconChatTeardropTextLight }
