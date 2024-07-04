/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatCircleTextBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172 108a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m76-8a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.06 12 12 0 0 1 1 9.81l-9.93 29.79 29.79-9.93a12.1 12.1 0 0 1 3.8-.62 12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatCircleTextBold))
export { Memo as IconChatCircleTextBold }
