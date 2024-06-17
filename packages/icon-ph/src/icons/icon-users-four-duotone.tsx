/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUsersFourDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M112 168a32 32 0 1 1-32-32 32 32 0 0 1 32 32M80 32a32 32 0 1 0 32 32 32 32 0 0 0-32-32m96 104a32 32 0 1 0 32 32 32 32 0 0 0-32-32m0-40a32 32 0 1 0-32-32 32 32 0 0 0 32 32"
          opacity={0.2}
        />
        <Path d="M27.2 126.4a8 8 0 0 0 11.2-1.6 52 52 0 0 1 83.2 0 8 8 0 0 0 11.2 1.59 7.73 7.73 0 0 0 1.59-1.59 52 52 0 0 1 83.2 0 8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0 67.27 67.27 0 0 0-21 14.31 67.27 67.27 0 0 0-21-14.31 40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2M176 40a24 24 0 1 1-24 24 24 24 0 0 1 24-24m-96 0a24 24 0 1 1-24 24 24 24 0 0 1 24-24m123 157.51a40 40 0 1 0-53.94 0 67.27 67.27 0 0 0-21 14.31 67.27 67.27 0 0 0-21-14.31 40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6 52 52 0 0 1 83.2 0 8 8 0 0 0 11.2 1.59 7.73 7.73 0 0 0 1.59-1.59 52 52 0 0 1 83.2 0 8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51M80 144a24 24 0 1 1-24 24 24 24 0 0 1 24-24m96 0a24 24 0 1 1-24 24 24 24 0 0 1 24-24" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconUsersFourDuotone))
export { Memo as IconUsersFourDuotone }
