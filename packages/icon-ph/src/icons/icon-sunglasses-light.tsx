/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSunglassesLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 42a6 6 0 0 0 0 12 18 18 0 0 1 18 18v58H38V72a18 18 0 0 1 18-18 6 6 0 0 0 0-12 30 30 0 0 0-30 30v92a42 42 0 0 0 84 0v-22h36v22a42 42 0 0 0 84 0V72a30 30 0 0 0-30-30M38 164v-21.52L84.53 189A30 30 0 0 1 38 164m60 0a29.83 29.83 0 0 1-5 16.53L54.48 142H98Zm60 0v-21.52L204.53 189A30 30 0 0 1 158 164m55 16.53L174.48 142H218v22a29.83 29.83 0 0 1-5 16.53"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSunglassesLight))
export { Memo as IconSunglassesLight }
