/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEqualsThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 160a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M40 100h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEqualsThin))
export { Memo as IconEqualsThin }
