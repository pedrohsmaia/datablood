/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretDoubleDownLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212.24 123.76a6 6 0 0 1 0 8.48l-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 1 1 8.48-8.48L128 199.51l75.76-75.75a6 6 0 0 1 8.48 0m-88.48 8.48a6 6 0 0 0 8.48 0l80-80a6 6 0 0 0-8.48-8.48L128 119.51 52.24 43.76a6 6 0 0 0-8.48 8.48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretDoubleDownLight))
export { Memo as IconCaretDoubleDownLight }
