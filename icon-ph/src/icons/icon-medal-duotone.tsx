/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMedalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M176 96a48 48 0 1 1-48-48 48 48 0 0 1 48 48" opacity={0.2} />
        <Path d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.07 8.07 0 0 0 3.57.79 8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72m112 131.06-36.43-18.21a8 8 0 0 0-7.16 0L88 227.06v-52.69a87.89 87.89 0 0 0 80 0ZM128 152a56 56 0 1 0-56-56 56.06 56.06 0 0 0 56 56m0-96a40 40 0 1 1-40 40 40 40 0 0 1 40-40" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMedalDuotone))
export { Memo as IconMedalDuotone }
