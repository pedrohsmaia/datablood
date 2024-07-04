/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSignpostFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m246 117.35-36 40a8 8 0 0 1-6 2.65h-68v64a8 8 0 0 1-16 0v-64H40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h80V32a8 8 0 0 1 16 0v32h68a8 8 0 0 1 6 2.65l36 40a8 8 0 0 1 0 10.7"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSignpostFill))
export { Memo as IconSignpostFill }
