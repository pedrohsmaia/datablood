/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShowerFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M64 236a12 12 0 1 1-12-12 12 12 0 0 1 12 12m20-44a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-64 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m32-32a12 12 0 1 0 12 12 12 12 0 0 0-12-12M248 32h-28.69A15.86 15.86 0 0 0 208 36.69l-27.86 27.85L53.38 86.19a16 16 0 0 0-8.69 27.1l98 98a16 16 0 0 0 27.09-8.66l21.68-126.77L219.31 48H248a8 8 0 0 0 0-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShowerFill))
export { Memo as IconShowerFill }
