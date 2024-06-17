/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGrainsFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 56a87.52 87.52 0 0 0-31.84 6c-14.32-29.7-43.25-44.46-44.57-45.13a8 8 0 0 0-7.16 0c-1.33.64-30.26 15.4-44.58 45.13A87.52 87.52 0 0 0 48 56a8 8 0 0 0-8 8v80a88.12 88.12 0 0 0 75.48 87.1 4 4 0 0 0 4.52-4v-50.83a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v51.14a4 4 0 0 0 4.52 4A88.12 88.12 0 0 0 216 144V64a8 8 0 0 0-8-8m-88 93.46a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144Zm8-42.1a88.61 88.61 0 0 0-33.84-38.25c9.21-19.21 26.4-31.33 33.84-35.9 7.45 4.58 24.63 16.7 33.84 35.9A88.61 88.61 0 0 0 128 107.36m72 5a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGrainsFill))
export { Memo as IconGrainsFill }
