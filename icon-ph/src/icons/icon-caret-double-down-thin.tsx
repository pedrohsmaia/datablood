/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretDoubleDownThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M210.83 125.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66 0l-80-80a4 4 0 1 1 5.66-5.66L128 202.34l77.17-77.17a4 4 0 0 1 5.66 0m-85.66 5.66a4 4 0 0 0 5.66 0l80-80a4 4 0 1 0-5.66-5.66L128 122.34 50.83 45.17a4 4 0 0 0-5.66 5.66Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretDoubleDownThin))
export { Memo as IconCaretDoubleDownThin }
