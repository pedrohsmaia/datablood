/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsMerge = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 40v64a8 8 0 0 1-2.34 5.66L136 163.31v49.38l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69v-49.38l-53.66-53.65A8 8 0 0 1 64 104V40a8 8 0 0 1 16 0v60.69l48 48 48-48V40a8 8 0 0 1 16 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsMerge))
export { Memo as IconArrowsMerge }
