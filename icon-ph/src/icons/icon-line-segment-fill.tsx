/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLineSegmentFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M214.64 86.62a32.07 32.07 0 0 1-38.89 4.94l-84.19 84.19a32 32 0 1 1-50.2-6.37 32.06 32.06 0 0 1 38.89-4.94l84.19-84.19a32 32 0 1 1 50.2 6.37"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLineSegmentFill))
export { Memo as IconLineSegmentFill }
