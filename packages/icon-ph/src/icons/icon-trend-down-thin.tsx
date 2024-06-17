/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrendDownThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 136v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.34L136 109.66l-37.17 37.17a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L96 138.34l37.17-37.17a4 4 0 0 1 5.66 0L228 190.34V136a4 4 0 0 1 8 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrendDownThin))
export { Memo as IconTrendDownThin }
