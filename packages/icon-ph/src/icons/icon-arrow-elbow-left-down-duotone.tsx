/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowLeftDownDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m128 160-48 48-48-48Z" opacity={0.2} />
        <Path d="M224 56H80a8 8 0 0 0-8 8v88H32a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 128 152H88V72h136a8 8 0 0 0 0-16M80 196.69 51.31 168h57.38Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowLeftDownDuotone))
export { Memo as IconArrowElbowLeftDownDuotone }
