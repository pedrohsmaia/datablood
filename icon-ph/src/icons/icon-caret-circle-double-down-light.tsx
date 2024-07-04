/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretCircleDoubleDownLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200.12 55.87A102 102 0 0 0 55.87 200.12 102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28 90.1 90.1 0 0 1 0 127.28m-27.4-107.88a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L128 111.51l27.76-27.75a6 6 0 0 1 8.48 0m0 56a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L128 167.51l27.76-27.75a6 6 0 0 1 8.48 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretCircleDoubleDownLight))
export { Memo as IconCaretCircleDoubleDownLight }
