/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSignpostBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m248.92 104-36-40a12 12 0 0 0-8.92-4h-64V32a12 12 0 0 0-24 0v28H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h76v60a12 12 0 0 0 24 0v-60h64a12 12 0 0 0 8.92-4l36-40a12 12 0 0 0 0-16m-50.26 36H44V84h154.66l25.2 28Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSignpostBold))
export { Memo as IconSignpostBold }
