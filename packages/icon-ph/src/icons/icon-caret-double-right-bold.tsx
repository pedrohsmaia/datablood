/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretDoubleRightBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m144.49 136.49-80 80a12 12 0 0 1-17-17L119 128 47.51 56.49a12 12 0 0 1 17-17l80 80a12 12 0 0 1-.02 17m80-17-80-80a12 12 0 1 0-17 17L199 128l-71.52 71.51a12 12 0 0 0 17 17l80-80a12 12 0 0 0 .01-17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretDoubleRightBold))
export { Memo as IconCaretDoubleRightBold }
