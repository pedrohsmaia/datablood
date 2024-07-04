/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHourglassMedium = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.6A16.05 16.05 0 0 0 200 75.64M72 40h112v35.64L178.23 80H77.33L72 76Zm56 78L98.67 96h58.4Zm56 98H72v-36l48-36v24a8 8 0 0 0 16 0v-23.92l48 36.28Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHourglassMedium))
export { Memo as IconHourglassMedium }
