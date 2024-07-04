/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAirTrafficControlDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m223.51 74.73-26.18 72a8 8 0 0 1-7.52 5.27H66.19a8 8 0 0 1-7.52-5.27l-26.18-72A8 8 0 0 1 40 64h176a8 8 0 0 1 7.51 10.73"
          opacity={0.2}
        />
        <Path d="M229.11 62.82A16 16 0 0 0 216 56h-80V24h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v32H40a16 16 0 0 0-15 21.47l26.19 72a16 16 0 0 0 15 10.53H96v64a8 8 0 0 0 16 0v-64h32v64a8 8 0 0 0 16 0v-64h29.82a16 16 0 0 0 15-10.53l26.19-72a16 16 0 0 0-1.9-14.65M110.68 144l-13.1-72h60.84l-13.1 72ZM40 72h41.32l13.09 72H66.18Zm149.82 72h-28.23l13.09-72H216Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAirTrafficControlDuotone))
export { Memo as IconAirTrafficControlDuotone }
