/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretDoubleRightLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m140.24 132.24-80 80a6 6 0 0 1-8.48-8.48L127.51 128 51.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48m80-8.48-80-80a6 6 0 0 0-8.48 8.48L207.51 128l-75.75 75.76a6 6 0 1 0 8.48 8.48l80-80a6 6 0 0 0 0-8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretDoubleRightLight))
export { Memo as IconCaretDoubleRightLight }
