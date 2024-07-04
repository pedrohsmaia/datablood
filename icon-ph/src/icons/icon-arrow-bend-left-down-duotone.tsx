/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendLeftDownDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m152 176-48 48-48-48Z" opacity={0.2} />
        <Path d="M200 24A104.11 104.11 0 0 0 96 128v40H56a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 152 168h-40v-40a88.1 88.1 0 0 1 88-88 8 8 0 0 0 0-16m-96 188.69L75.31 184h57.38Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendLeftDownDuotone))
export { Memo as IconArrowBendLeftDownDuotone }
