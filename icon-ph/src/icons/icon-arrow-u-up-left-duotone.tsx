/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowUUpLeftDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M80 40v96L32 88Z" opacity={0.2} />
        <Path d="M168 80H88V40a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 136V96h80a48 48 0 0 1 0 96H80a8 8 0 0 0 0 16h88a64 64 0 0 0 0-128m-96 36.69L43.31 88 72 59.31Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowUUpLeftDuotone))
export { Memo as IconArrowUUpLeftDuotone }
