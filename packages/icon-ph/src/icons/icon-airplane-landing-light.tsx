/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAirplaneLandingLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M246 216a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m-23.62-26.22L45.75 140.32A38.14 38.14 0 0 1 18 103.72V48a14 14 0 0 1 18.43-13.29l5.47 1.83a6 6 0 0 1 3.74 3.65l11 30.33L90 80V48a14 14 0 0 1 18.43-13.29l5.47 1.83a6 6 0 0 1 3.63 3.37l22.88 54.53 61.77 17.27A38.09 38.09 0 0 1 230 148.32V184a6 6 0 0 1-7.62 5.78M218 148.32a26.07 26.07 0 0 0-19-25l-64.58-18a6 6 0 0 1-3.91-3.46l-23-54.7-2.89-1A2 2 0 0 0 102 48v40a6 6 0 0 1-7.64 5.77l-44-12.54a6 6 0 0 1-4-3.73L35.34 47l-2.71-.9A1.91 1.91 0 0 0 32 46a2 2 0 0 0-1.16.38A2 2 0 0 0 30 48v55.72a26.09 26.09 0 0 0 19 25l169 47.33Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAirplaneLandingLight))
export { Memo as IconAirplaneLandingLight }
