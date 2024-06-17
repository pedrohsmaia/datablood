/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsCounterClockwiseLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M88 102H40a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v29.26C60.41 59.75 88.34 34 128 34c42 0 67.19 24.71 68.24 25.76a6 6 0 0 1-8.47 8.49C187.54 68 164.85 46 128 46c-38.41 0-65.24 28.88-76.65 44H88a6 6 0 0 1 0 12m128 52h-48a6 6 0 0 0 0 12h36.65c-11.41 15.12-38.24 44-76.65 44-36.85 0-59.54-22-59.77-22.25a6 6 0 0 0-8.47 8.49C60.81 197.29 86 222 128 222c39.66 0 67.59-25.75 82-43.26V208a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsCounterClockwiseLight))
export { Memo as IconArrowsCounterClockwiseLight }
