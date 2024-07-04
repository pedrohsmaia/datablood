/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSkipBack = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M199.81 34a16 16 0 0 0-16.24.43L64 109.23V40a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-69.23l119.57 74.78A15.95 15.95 0 0 0 208 208.12V47.88A15.86 15.86 0 0 0 199.81 34M192 208 64.16 128 192 48.07Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSkipBack))
export { Memo as IconSkipBack }
