/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeartStraightBreakDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M217.36 133.36 128 224l-89.36-90.64a50 50 0 0 1 70.72-70.72L128 80l18.64-17.36a50 50 0 1 1 70.72 70.72"
          opacity={0.2}
        />
        <Path d="M223 57a58.1 58.1 0 0 0-82-.06l-13 12.53-13-12.56a58 58 0 0 0-82 82.05l89.37 90.66a8 8 0 0 0 11.4 0L223 139a58.09 58.09 0 0 0 0-82m-11.36 70.76L128 212.6l-83.71-84.92a42 42 0 1 1 59.41-59.4l.1.1 12.67 12.19-10 9.65a8 8 0 0 0-.11 11.42L132.69 128l-10.35 10.35a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0 0-11.31l-26.24-26.27 28.78-27.71.11-.1a42 42 0 1 1 59.37 59.44Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHeartStraightBreakDuotone))
export { Memo as IconHeartStraightBreakDuotone }
