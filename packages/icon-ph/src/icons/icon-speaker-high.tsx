/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerHigh = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64-56-43.55V91.91l56-43.55Zm54-106.08a40 40 0 0 1 0 52.88 8 8 0 0 1-12-10.58 24 24 0 0 0 0-31.72 8 8 0 0 1 12-10.58M248 128a79.9 79.9 0 0 1-20.37 53.34 8 8 0 0 1-11.92-10.67 64 64 0 0 0 0-85.33 8 8 0 1 1 11.92-10.67A79.83 79.83 0 0 1 248 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerHigh))
export { Memo as IconSpeakerHigh }
