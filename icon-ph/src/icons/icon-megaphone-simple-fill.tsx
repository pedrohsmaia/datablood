/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMegaphoneSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m220.54 86.66-176.06-54A16 16 0 0 0 24 48v144a16 16 0 0 0 16 16 16 16 0 0 0 4.52-.65L128 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 232 138v-36a16.09 16.09 0 0 0-11.46-15.34M176 192h-32v-15.18l32-9.82Zm40-54h-.11L144 160.08V79.91L215.89 102h.11z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMegaphoneSimpleFill))
export { Memo as IconMegaphoneSimpleFill }
