/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconParagraphFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 48a8 8 0 0 1-8 8h-16v152a8 8 0 0 1-16 0V56h-24v152a8 8 0 0 1-16 0v-40H96a64 64 0 0 1 0-128h112a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconParagraphFill))
export { Memo as IconParagraphFill }
