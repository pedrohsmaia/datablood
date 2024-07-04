/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWavesLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M35.74 76.21a6 6 0 0 1 0-8.45C36.48 67 53.9 50 88 50c17.81 0 30.79 8.65 43.33 17 11.56 7.71 22.49 15 36.67 15 15.08 0 26.17-3.87 32.82-7.12a45.82 45.82 0 0 0 11-7.15 6 6 0 0 1 8.46 8.51C219.52 77 202.1 94 168 94c-17.82 0-30.79-8.65-43.33-17-11.56-7.72-22.49-15-36.67-15-15.08 0-26.17 3.87-32.82 7.12a45.82 45.82 0 0 0-11 7.15 6 6 0 0 1-8.44-.06m176 47.52a45.82 45.82 0 0 1-11 7.15c-6.57 3.25-17.66 7.12-32.74 7.12-14.18 0-25.11-7.28-36.67-15-12.54-8.36-25.52-17-43.33-17-34.1 0-51.52 17-52.25 17.76a6 6 0 0 0 8.46 8.51 45.82 45.82 0 0 1 11-7.15C61.83 121.87 72.92 118 88 118c14.18 0 25.11 7.28 36.67 15 12.54 8.36 25.51 17 43.33 17 34.1 0 51.52-17 52.25-17.76a6 6 0 0 0-8.46-8.51Zm0 56a45.82 45.82 0 0 1-11 7.15c-6.57 3.25-17.66 7.12-32.74 7.12-14.18 0-25.11-7.28-36.67-15-12.54-8.36-25.52-17-43.33-17-34.1 0-51.52 17-52.25 17.76a6 6 0 0 0 8.46 8.51 45.82 45.82 0 0 1 11-7.15C61.83 177.87 72.92 174 88 174c14.18 0 25.11 7.28 36.67 15 12.54 8.36 25.51 17 43.33 17 34.1 0 51.52-17 52.25-17.76a6 6 0 0 0-8.46-8.51Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWavesLight))
export { Memo as IconWavesLight }
