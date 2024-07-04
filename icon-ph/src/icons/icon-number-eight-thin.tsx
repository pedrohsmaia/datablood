/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberEightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M147.08 119.64a44 44 0 1 0-38.16 0 52 52 0 1 0 38.16 0M92 80a36 36 0 1 1 36 36 36 36 0 0 1-36-36m36 132a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberEightThin))
export { Memo as IconNumberEightThin }
