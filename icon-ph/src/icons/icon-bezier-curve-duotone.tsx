/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBezierCurveDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M152 80a24 24 0 1 1-24-24 24 24 0 0 1 24 24M40 152a24 24 0 1 0 24 24 24 24 0 0 0-24-24m176 0a24 24 0 1 0 24 24 24 24 0 0 0-24-24"
          opacity={0.2}
        />
        <Path d="M221.07 144.41A96.68 96.68 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.68 96.68 0 0 0-40.07 56.41A32 32 0 1 0 51.08 146 80.6 80.6 0 0 1 99 93.44a32 32 0 0 0 58.06 0A80.6 80.6 0 0 1 204.92 146a32 32 0 1 0 16.15-1.57ZM56 176a16 16 0 1 1-16-16 16 16 0 0 1 16 16m72-80a16 16 0 1 1 16-16 16 16 0 0 1-16 16m88 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBezierCurveDuotone))
export { Memo as IconBezierCurveDuotone }
