/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatCircleDotsLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M138 128a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-54-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10m58 10a102 102 0 0 1-150.69 89.65l-34.87 11.62a14 14 0 0 1-17.71-17.71l11.62-34.87A102 102 0 1 1 230 128m-12 0a90 90 0 1 0-167.92 45.06 6 6 0 0 1 .5 4.91l-12.46 37.38a2 2 0 0 0 2.53 2.53L78 205.42a6.2 6.2 0 0 1 1.9-.31 6.09 6.09 0 0 1 3 .81A90 90 0 0 0 218 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatCircleDotsLight))
export { Memo as IconChatCircleDotsLight }
