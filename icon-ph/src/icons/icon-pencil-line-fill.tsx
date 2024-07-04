/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPencilLineFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m227.32 73.37-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M79.32 188l90.34-90.34 16.69 16.68L96 204.69Zm79-101.66L68 176.69 51.31 160l90.35-90.34ZM48 179.31 76.69 208H48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPencilLineFill))
export { Memo as IconPencilLineFill }
