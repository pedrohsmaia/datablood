/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsHorizontalLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m236.24 132.24-32 32a6 6 0 0 1-8.48-8.48L217.51 134h-179l21.75 21.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48L38.49 122h179l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 .02 8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsHorizontalLight))
export { Memo as IconArrowsHorizontalLight }
