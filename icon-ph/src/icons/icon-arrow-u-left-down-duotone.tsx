/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowULeftDownDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m136 176-48 48-48-48Z" opacity={0.2} />
        <Path d="M144 24a64.07 64.07 0 0 0-64 64v80H40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 136 168H96V88a48 48 0 0 1 96 0v88a8 8 0 0 0 16 0V88a64.07 64.07 0 0 0-64-64M88 212.69 59.31 184h57.38Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowULeftDownDuotone))
export { Memo as IconArrowULeftDownDuotone }
