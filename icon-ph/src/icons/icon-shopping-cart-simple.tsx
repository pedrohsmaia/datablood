/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShoppingCartSimple = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M96 216a16 16 0 1 1-16-16 16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m47.65-125.65-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35M213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShoppingCartSimple))
export { Memo as IconShoppingCartSimple }
