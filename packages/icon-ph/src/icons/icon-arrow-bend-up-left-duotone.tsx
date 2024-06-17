/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendUpLeftDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M80 56v96l-48-48Z" opacity={0.2} />
        <Path d="M128 96H88V56a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 152v-40h40a88.1 88.1 0 0 1 88 88 8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 96m-56 36.69L43.31 104 72 75.31Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendUpLeftDuotone))
export { Memo as IconArrowBendUpLeftDuotone }
