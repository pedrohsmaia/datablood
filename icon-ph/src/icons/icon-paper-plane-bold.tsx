/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaperPlaneBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m241.42 198.2-.06-.09L145.3 30.17a20 20 0 0 0-34.82 0L14.58 198.2a20 20 0 0 0 24.1 28.64l89.2-30.61 89.45 30.61a20.22 20.22 0 0 0 6.72 1.16 20 20 0 0 0 17.37-29.8M140 175v-55a12 12 0 0 0-24 0v54.93l-75.24 25.82 87.13-152.69 87.34 152.7Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaperPlaneBold))
export { Memo as IconPaperPlaneBold }
