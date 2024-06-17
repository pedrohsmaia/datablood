/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsSixVerticalLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M102 60a10 10 0 1 1-10-10 10 10 0 0 1 10 10m62 10a10 10 0 1 0-10-10 10 10 0 0 0 10 10m-72 48a10 10 0 1 0 10 10 10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10m-72 68a10 10 0 1 0 10 10 10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsSixVerticalLight))
export { Memo as IconDotsSixVerticalLight }
