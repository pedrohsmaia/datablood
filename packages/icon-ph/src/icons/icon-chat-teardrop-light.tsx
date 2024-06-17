/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTeardropLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M132 26a98.11 98.11 0 0 0-98 98v84.33A13.68 13.68 0 0 0 47.67 222H132a98 98 0 0 0 0-196m0 184H47.67a1.67 1.67 0 0 1-1.67-1.67V124a86 86 0 1 1 86 86"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTeardropLight))
export { Memo as IconChatTeardropLight }
