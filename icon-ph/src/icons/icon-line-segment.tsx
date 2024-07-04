/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLineSegment = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M214.64 41.36a32 32 0 0 0-50.2 38.89l-84.19 84.19a32.06 32.06 0 0 0-38.89 4.94 32 32 0 1 0 50.2 6.37l84.19-84.19a32 32 0 0 0 38.89-50.2m-139.33 162a16 16 0 0 1-22.64-22.64 16 16 0 0 1 22.63 0 16 16 0 0 1 .01 22.61Zm128-128a16 16 0 1 1 0-22.63 16 16 0 0 1 .02 22.57Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLineSegment))
export { Memo as IconLineSegment }
