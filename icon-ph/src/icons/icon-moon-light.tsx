/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoonLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232.13 143.64a6 6 0 0 0-6-1.49 90.07 90.07 0 0 1-112.27-112.3 6 6 0 0 0-7.49-7.48 102.88 102.88 0 0 0-51.89 36.31 102 102 0 0 0 142.84 142.84 102.88 102.88 0 0 0 36.31-51.89 6 6 0 0 0-1.5-5.99m-42 48.29a90 90 0 0 1-126-126 90.9 90.9 0 0 1 35.52-28.27 102.06 102.06 0 0 0 118.69 118.69 90.9 90.9 0 0 1-28.24 35.58Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMoonLight))
export { Memo as IconMoonLight }
