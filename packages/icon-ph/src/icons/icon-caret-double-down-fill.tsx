/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretDoubleDownFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M215.39 124.94a8 8 0 0 1-1.73 8.72l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 120h60.69L42.34 53.66A8 8 0 0 1 48 40h160a8 8 0 0 1 5.66 13.66L147.31 120H208a8 8 0 0 1 7.39 4.94"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretDoubleDownFill))
export { Memo as IconCaretDoubleDownFill }
