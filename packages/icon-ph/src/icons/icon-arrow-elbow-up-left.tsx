/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowUpLeft = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 80v144a8 8 0 0 1-16 0V88H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48-.06-.07c-.16-.16-.32-.34-.47-.52l-.23-.31a3.71 3.71 0 0 1-.23-.32l-.23-.37a2.91 2.91 0 0 1-.17-.3c-.07-.12-.13-.25-.19-.38s-.1-.21-.15-.33-.09-.25-.14-.37l-.13-.36-.09-.39c0-.13-.07-.25-.1-.37s0-.31-.06-.46 0-.21-.05-.32a8.34 8.34 0 0 1 0-1.58c0-.11 0-.21.05-.32s0-.31.06-.46.06-.24.1-.37l.09-.39.13-.36c.05-.12.09-.25.14-.37s.1-.22.15-.33.12-.26.19-.38a2.91 2.91 0 0 1 .17-.3l.23-.37a3.71 3.71 0 0 1 .23-.32l.23-.31c.15-.18.31-.36.47-.52l.06-.07 48-48a8 8 0 0 1 11.32 11.32L67.31 72H192a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowUpLeft))
export { Memo as IconArrowElbowUpLeft }
