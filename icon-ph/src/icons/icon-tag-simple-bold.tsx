/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTagSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m250 121.34-45.64-68.43A20 20 0 0 0 187.72 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h147.72a20 20 0 0 0 16.64-8.91L250 134.66a12 12 0 0 0 0-13.32M185.58 188H44V68h141.58l40 60Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTagSimpleBold))
export { Memo as IconTagSimpleBold }
