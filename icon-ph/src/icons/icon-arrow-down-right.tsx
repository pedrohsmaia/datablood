/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowDownRight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 88v104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h84.69L58.34 69.66a8 8 0 0 1 11.32-11.32L184 172.69V88a8 8 0 0 1 16 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowDownRight))
export { Memo as IconArrowDownRight }
