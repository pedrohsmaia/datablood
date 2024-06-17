/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowLeftUpDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M128 96H32l48-48Z" opacity={0.2} />
        <Path d="M224 184H88v-80h40a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 32 104h40v88a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16M80 59.31 108.69 88H51.31Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowLeftUpDuotone))
export { Memo as IconArrowElbowLeftUpDuotone }
