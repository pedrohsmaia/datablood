/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsMergeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M190 40v64a6 6 0 0 1-1.76 4.24L134 162.49v55l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 217.51v-55l-54.24-54.27A6 6 0 0 1 66 104V40a6 6 0 0 1 12 0v61.51l50 50 50-50V40a6 6 0 0 1 12 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsMergeLight))
export { Memo as IconArrowsMergeLight }
