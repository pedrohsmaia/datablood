/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendDoubleUpLeftLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M84.24 147.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L40.49 104ZM128 98H94.49l37.75-37.76a6 6 0 0 0-8.48-8.48l-48 48a6 6 0 0 0 0 8.48l48 48a6 6 0 0 0 8.48-8.48L94.49 110H128a90.1 90.1 0 0 1 90 90 6 6 0 0 0 12 0A102.12 102.12 0 0 0 128 98"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendDoubleUpLeftLight))
export { Memo as IconArrowBendDoubleUpLeftLight }
