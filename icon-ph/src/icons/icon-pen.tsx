/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPen = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m227.32 73.37-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l83.67-83.66 3.48 13.9-36.8 36.79a8 8 0 0 0 11.31 11.32l40-40a8 8 0 0 0 2.11-7.6l-6.9-27.61L227.32 96a16 16 0 0 0 0-22.63M48 179.31 76.69 208H48Zm48 25.38L51.31 160 136 75.31 180.69 120Zm96-96L147.32 64l24-24L216 84.69Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPen))
export { Memo as IconPen }
