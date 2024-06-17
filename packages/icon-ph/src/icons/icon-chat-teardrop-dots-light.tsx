/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatTeardropDotsLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M132 26a98.11 98.11 0 0 0-98 98v84.33A13.68 13.68 0 0 0 47.67 222H132a98 98 0 0 0 0-196m0 184H47.67a1.67 1.67 0 0 1-1.67-1.67V124a86 86 0 1 1 86 86m10-82a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-44 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10m88 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatTeardropDotsLight))
export { Memo as IconChatTeardropDotsLight }
