/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPencilLine = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m227.32 73.37-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M136 75.31 152.69 92 68 176.69 51.31 160ZM48 208v-28.69L76.69 208Zm48-3.31L79.32 188 164 103.31 180.69 120Zm96-96L147.32 64l24-24L216 84.69Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPencilLine))
export { Memo as IconPencilLine }
