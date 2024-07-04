/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextAUnderlineLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M61.45 173.43a6 6 0 0 0 8-2.88L86.63 134h82.74l17.2 36.55A6 6 0 0 0 192 174a5.92 5.92 0 0 0 2.55-.57 6 6 0 0 0 2.88-8l-64-136a6 6 0 0 0-10.86 0l-64 136a6 6 0 0 0 2.88 8M128 46.09 163.72 122H92.28ZM222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextAUnderlineLight))
export { Memo as IconTextAUnderlineLight }
