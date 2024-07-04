/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconParagraph = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 40H96a64 64 0 0 0 0 128h40v40a8 8 0 0 0 16 0V56h24v152a8 8 0 0 0 16 0V56h16a8 8 0 0 0 0-16m-72 112H96a48 48 0 0 1 0-96h40Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconParagraph))
export { Memo as IconParagraph }
