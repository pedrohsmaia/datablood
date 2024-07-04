/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNewspaperClippingFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M72 104h32v48H72Zm160-48v160a8 8 0 0 1-11.58 7.15L192 208.94l-28.42 14.21a8 8 0 0 1-7.16 0L128 208.94l-28.42 14.21a8 8 0 0 1-7.16 0L64 208.94l-28.42 14.21A8 8 0 0 1 24 216V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16M120 96a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8Zm80 48a8 8 0 0 0-8-8h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8m0-32a8 8 0 0 0-8-8h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNewspaperClippingFill))
export { Memo as IconNewspaperClippingFill }
