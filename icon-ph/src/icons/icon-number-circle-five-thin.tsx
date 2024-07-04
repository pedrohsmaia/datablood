/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleFiveThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92M115.39 84l-5.87 35.21A33.26 33.26 0 0 1 124 116a32 32 0 0 1 0 64 31.62 31.62 0 0 1-22.86-9.2 4 4 0 1 1 5.72-5.6A23.67 23.67 0 0 0 124 172a24 24 0 0 0 0-48 23.67 23.67 0 0 0-17.14 6.8 4 4 0 0 1-6.81-3.46l8-48A4 4 0 0 1 112 76h40a4 4 0 0 1 0 8Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleFiveThin))
export { Memo as IconNumberCircleFiveThin }
