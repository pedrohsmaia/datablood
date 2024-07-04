/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowArcRightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 88v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.3l-29.24-29A92 92 0 0 0 36 184a4 4 0 0 1-8 0 100 100 0 0 1 170.71-70.71l29.29 29.1V88a4 4 0 0 1 8 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowArcRightThin))
export { Memo as IconArrowArcRightThin }
