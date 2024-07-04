/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPercentFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 172a12 12 0 1 1-12-12 12 12 0 0 1 12 12M92 96a12 12 0 1 0-12-12 12 12 0 0 0 12 12m132-48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M64 84a28 28 0 1 0 28-28 28 28 0 0 0-28 28m128 88a28 28 0 1 0-28 28 28 28 0 0 0 28-28m-2.34-105.66a8 8 0 0 0-11.32 0l-112 112a8 8 0 0 0 11.32 11.32l112-112a8 8 0 0 0 0-11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPercentFill))
export { Memo as IconPercentFill }
