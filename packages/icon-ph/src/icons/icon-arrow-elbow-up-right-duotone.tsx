/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowUpRightDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m208 80-48 48V32Z" opacity={0.2} />
        <Path d="m213.66 74.34-48-48A8 8 0 0 0 152 32v40H64a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V88h80v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M168 108.69V51.31L196.69 80Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowUpRightDuotone))
export { Memo as IconArrowElbowUpRightDuotone }
