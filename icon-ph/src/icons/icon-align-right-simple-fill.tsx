/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignRightSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m-48 24H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignRightSimpleFill))
export { Memo as IconAlignRightSimpleFill }
