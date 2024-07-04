/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextB = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M170.48 115.7A44 44 0 0 0 140 40H72a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h80a48 48 0 0 0 18.48-92.3M80 56h60a28 28 0 0 1 0 56H80Zm72 136H80v-64h72a32 32 0 0 1 0 64"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextB))
export { Memo as IconTextB }
