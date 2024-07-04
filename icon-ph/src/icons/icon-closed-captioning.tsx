/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClosedCaptioning = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H32V64h192zm-105.08-40.29a8 8 0 0 1-2.92 10.93 40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 10.92 2.92m80 0a8 8 0 0 1-2.92 10.93 40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 10.92 2.92"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconClosedCaptioning))
export { Memo as IconClosedCaptioning }
