/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSteeringWheelBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 144a16 16 0 1 1-16-16 16 16 0 0 1 16 16m92-16A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-70.45 28h41.63c.79-2.21 1.49-4.47 2.09-6.76a116 116 0 0 0-162.54 0q.9 3.44 2.09 6.76h41.63a20.07 20.07 0 0 1 18.73 13l16.06 42.93c.92 0 1.83.07 2.76.07s1.82 0 2.72-.07l16.1-43A20.09 20.09 0 0 1 165.55 156M44.41 119.73a139.85 139.85 0 0 1 167.18 0 84 84 0 0 0-167.18 0m53.08 86.51L87.68 180H62.1a84.46 84.46 0 0 0 35.39 26.24M193.9 180h-25.58l-9.84 26.25A84.35 84.35 0 0 0 193.9 180"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSteeringWheelBold))
export { Memo as IconSteeringWheelBold }
