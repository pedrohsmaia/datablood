/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSignpostLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m244.46 108-36-40a6 6 0 0 0-4.46-2h-70V32a6 6 0 0 0-12 0v34H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h82v66a6 6 0 0 0 12 0v-66h70a6 6 0 0 0 4.46-2l36-40a6 6 0 0 0 0-8m-43.13 38H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h161.33l30.6 34Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSignpostLight))
export { Memo as IconSignpostLight }
