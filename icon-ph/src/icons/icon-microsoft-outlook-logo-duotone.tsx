/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMicrosoftOutlookLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M144 80v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M88 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16m128-40h-8V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-88a16 16 0 0 0-16-16M112 48h80v77.24l-40 28.89V80a16 16 0 0 0-16-16h-24ZM40 176V80h96v96zm48 32v-16h48a16 16 0 0 0 16-16v-2.13L199.26 208Zm128-7.65L165.66 164 216 127.65Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMicrosoftOutlookLogoDuotone))
export { Memo as IconMicrosoftOutlookLogoDuotone }
