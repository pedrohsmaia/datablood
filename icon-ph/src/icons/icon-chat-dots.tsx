/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatDots = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.13 16.13 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Zm-100-64a12 12 0 1 1 12 12 12 12 0 0 1-12-12m-44 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12m88 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatDots))
export { Memo as IconChatDots }
