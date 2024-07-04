/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTeardropTextBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172 108a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m76-12a104.11 104.11 0 0 1-104 104H47.67A19.69 19.69 0 0 1 28 208.33V124a104 104 0 0 1 208 0m-24 0a80 80 0 0 0-160 0v80h80a80.09 80.09 0 0 0 80-80"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTeardropTextBold))
export { Memo as IconChatTeardropTextBold }
