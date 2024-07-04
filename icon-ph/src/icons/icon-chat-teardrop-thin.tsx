/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTeardropThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M132 28a96.11 96.11 0 0 0-96 96v84.33A11.68 11.68 0 0 0 47.67 220H132a96 96 0 0 0 0-192m0 184H47.67a3.67 3.67 0 0 1-3.67-3.67V124a88 88 0 1 1 88 88"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTeardropThin))
export { Memo as IconChatTeardropThin }
