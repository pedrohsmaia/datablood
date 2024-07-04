/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHandTapDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 148v36c0 24-8 40-8 40H64l-29.32-50a20 20 0 0 1 34.64-20L88 184V76a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0"
          opacity={0.2}
        />
        <Path d="M48 76a60 60 0 0 1 120 0 8 8 0 0 1-16 0 44 44 0 0 0-88 0 8 8 0 0 1-16 0m140 44a27.9 27.9 0 0 0-13.36 3.39A28 28 0 0 0 136 106.7V76a28 28 0 0 0-56 0v80l-3.82-6.13a28 28 0 0 0-48.41 28.17l29.32 50a8 8 0 1 0 13.8-8.04L41.6 170a12 12 0 1 1 20.78-12l.14.23 18.68 30A8 8 0 0 0 96 184V76a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0v20a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0v36c0 21.61-7.1 36.3-7.16 36.42a8 8 0 0 0 3.58 10.73 7.9 7.9 0 0 0 3.58.85 8 8 0 0 0 7.16-4.42c.37-.73 8.85-18 8.85-43.58v-36A28 28 0 0 0 188 120" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHandTapDuotone))
export { Memo as IconHandTapDuotone }
