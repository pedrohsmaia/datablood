/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignBottomSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 232a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M96 208h64a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignBottomSimpleFill))
export { Memo as IconAlignBottomSimpleFill }
