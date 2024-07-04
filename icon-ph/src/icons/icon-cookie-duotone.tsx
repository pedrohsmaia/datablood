/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCookieDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 128a96 96 0 1 1-96-96 48 48 0 0 0 48 48 48 48 0 0 0 48 48"
          opacity={0.2}
        />
        <Path d="M164.49 163.51a12 12 0 1 1-17 0 12 12 0 0 1 17 0m-81-8a12 12 0 1 0 17 0 12 12 0 0 0-16.98 0Zm9-39a12 12 0 1 0-17 0 12 12 0 0 0 17-.02Zm48-1a12 12 0 1 0 0 17 12 12 0 0 0 0-17M232 128A104 104 0 1 1 128 24a8 8 0 0 1 8 8 40 40 0 0 0 40 40 8 8 0 0 1 8 8 40 40 0 0 0 40 40 8 8 0 0 1 8 8m-16.31 7.39A56.13 56.13 0 0 1 168.5 87.5a56.13 56.13 0 0 1-47.89-47.19 88 88 0 1 0 95.08 95.08" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCookieDuotone))
export { Memo as IconCookieDuotone }
