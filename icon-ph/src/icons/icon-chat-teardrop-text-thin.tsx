/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTeardropTextThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m68-16a96.11 96.11 0 0 1-96 96H47.67A11.68 11.68 0 0 1 36 208.33V124a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84.33a3.67 3.67 0 0 0 3.67 3.67H132a88.1 88.1 0 0 0 88-88"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTeardropTextThin))
export { Memo as IconChatTeardropTextThin }
