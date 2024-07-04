/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCompassThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m46.21-143.58-64 32a4.08 4.08 0 0 0-1.79 1.79l-32 64A4 4 0 0 0 80 180a4.05 4.05 0 0 0 1.79-.42l64-32a4.08 4.08 0 0 0 1.79-1.79l32-64a4 4 0 0 0-5.37-5.37M141 141l-52.08 26L115 115l52.08-26Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCompassThin))
export { Memo as IconCompassThin }
