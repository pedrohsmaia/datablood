/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconIceCreamDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 112a16 16 0 0 1-16 16H56a16 16 0 0 1 0-32v-8a72 72 0 0 1 144 0v8a16 16 0 0 1 16 16"
          opacity={0.2}
        />
        <Path d="M208 89.37V88a80 80 0 0 0-160 0v1.37A24 24 0 0 0 56 136h3.36l61.69 108a8 8 0 0 0 13.9 0l61.69-108H200a24 24 0 0 0 8-46.63m-80 134.51L77.79 136h19.28l40.57 71Zm6.79-87.88 21.71 38-9.64 16.88L115.5 136Zm30.92 21.88L153.21 136h25ZM200 120H56a8 8 0 0 1 0-16 8 8 0 0 0 8-8v-8a64 64 0 0 1 128 0v8a8 8 0 0 0 8 8 8 8 0 0 1 0 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconIceCreamDuotone))
export { Memo as IconIceCreamDuotone }
