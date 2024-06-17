/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTeardropBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M132 20A104.11 104.11 0 0 0 28 124v84.33A19.69 19.69 0 0 0 47.67 228H132a104 104 0 0 0 0-208m0 184H52v-80a80 80 0 1 1 80 80"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTeardropBold))
export { Memo as IconChatTeardropBold }
