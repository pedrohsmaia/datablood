/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinkBreakFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M96 64a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0ZM64 96h16a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m64.08 85.66-7.21 7.21a38 38 0 1 1-53.74-53.74l7.21-7.21a8 8 0 1 1 11.32 11.31l-7.22 7.21a22 22 0 0 0 31.12 31.12l7.21-7.22a8 8 0 1 1 11.31 11.32M160 192a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm32-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m-3.13-39.13-7.21 7.21a8 8 0 1 1-11.32-11.31l7.22-7.21a22 22 0 0 0-31.12-31.12l-7.21 7.22a8 8 0 1 1-11.31-11.32l7.21-7.21a38 38 0 1 1 53.74 53.74"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLinkBreakFill))
export { Memo as IconLinkBreakFill }
