/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadioactiveBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16m-32 16a12 12 0 0 0-12-12H44.47a83.88 83.88 0 0 1 31.2-54.11L95.38 96a12 12 0 1 0 20.78-12l-22-38a20 20 0 0 0-28.87-6.34 107.85 107.85 0 0 0-45.26 78.4 20.22 20.22 0 0 0 5.21 15.43A20 20 0 0 0 40 140h44a12 12 0 0 0 12-12m139.92-9.94a107.81 107.81 0 0 0-45.26-78.39A20 20 0 0 0 161.79 46l-21.95 38a12 12 0 0 0 20.78 12l19.71-34.13a83.88 83.88 0 0 1 31.2 54.13H172a12 12 0 0 0 0 24h44a20 20 0 0 0 14.71-6.51 20.22 20.22 0 0 0 5.21-15.43m-75.52 42.05a12 12 0 0 0-20.79 12L159.19 206a84.33 84.33 0 0 1-62.38 0l19.58-33.91a12 12 0 0 0-20.79-12l-21.82 37.8a20 20 0 0 0 8.91 28.15 108.24 108.24 0 0 0 90.62 0 20 20 0 0 0 8.91-28.15Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadioactiveBold))
export { Memo as IconRadioactiveBold }
