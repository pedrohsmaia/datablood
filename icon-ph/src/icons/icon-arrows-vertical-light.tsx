/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsVerticalLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164.24 195.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 217.51v-179l-21.76 21.73a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L134 38.49v179l21.76-21.75a6 6 0 0 1 8.48.02"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsVerticalLight))
export { Memo as IconArrowsVerticalLight }
