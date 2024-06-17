/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowUUpRightDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m224 88-48 48V40Z" opacity={0.2} />
        <Path d="M172.94 143.39a8 8 0 0 0 8.72-1.73l48-48a8 8 0 0 0 0-11.32l-48-48A8 8 0 0 0 168 40v40H88a64 64 0 0 0 0 128h88a8 8 0 0 0 0-16H88a48 48 0 0 1 0-96h80v40a8 8 0 0 0 4.94 7.39M184 59.31 212.69 88 184 116.69Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowUUpRightDuotone))
export { Memo as IconArrowUUpRightDuotone }
