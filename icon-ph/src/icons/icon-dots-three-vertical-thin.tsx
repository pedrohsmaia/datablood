/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsThreeVerticalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M120 60a8 8 0 1 1 8 8 8 8 0 0 1-8-8m8 60a8 8 0 1 0 8 8 8 8 0 0 0-8-8m0 68a8 8 0 1 0 8 8 8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsThreeVerticalThin))
export { Memo as IconDotsThreeVerticalThin }
