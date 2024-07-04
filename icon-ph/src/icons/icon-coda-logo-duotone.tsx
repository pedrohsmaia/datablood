/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodaLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M128 128a48 48 0 0 0 48 48c10.27.41 17.9-2.25 25.88-7.37A4 4 0 0 1 208 172v36a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v36a4 4 0 0 1-6.15 3.36A48.24 48.24 0 0 0 128 128"
          opacity={0.2}
        />
        <Path d="M176 88a39.79 39.79 0 0 1 21.53 6.1A12 12 0 0 0 216 84V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-36a12 12 0 0 0-18.44-10.11c-7.25 4.65-13.41 6.41-21.24 6.11H176a40 40 0 0 1 0-80m-56 40a56.07 56.07 0 0 0 55.84 56 48.4 48.4 0 0 0 24.16-5.11V208H56V48h144v29.23A56.3 56.3 0 0 0 120 128" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCodaLogoDuotone))
export { Memo as IconCodaLogoDuotone }
