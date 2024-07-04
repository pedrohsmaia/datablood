/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowURightDownDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m216 176-48 48-48-48Z" opacity={0.2} />
        <Path d="M223.39 172.94A8 8 0 0 0 216 168h-40V88a64 64 0 0 0-128 0v88a8 8 0 0 0 16 0V88a48 48 0 0 1 96 0v80h-40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0 1.73-8.72M168 212.69 139.31 184h57.38Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowURightDownDuotone))
export { Memo as IconArrowURightDownDuotone }
