/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBedDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M240 112v56H104V80h104a32 32 0 0 1 32 32" opacity={0.2} />
        <Path d="M208 72H24V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M24 88h72v72H24Zm88 72V88h96a24 24 0 0 1 24 24v48Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBedDuotone))
export { Memo as IconBedDuotone }
