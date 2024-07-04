/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFadersHorizontalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M216 80v96H40V80Z" opacity={0.2} />
        <Path d="M32 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m184 88h-40v-16a8 8 0 0 0-16 0v48a8 8 0 0 0 16 0v-16h40a8 8 0 0 0 0-16m-80 0H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16m-32-56a8 8 0 0 0 8-8V88h104a8 8 0 0 0 0-16H112V56a8 8 0 0 0-16 0v48a8 8 0 0 0 8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFadersHorizontalDuotone))
export { Memo as IconFadersHorizontalDuotone }
