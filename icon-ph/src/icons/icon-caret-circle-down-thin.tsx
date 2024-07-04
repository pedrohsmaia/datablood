/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretCircleDownThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m42.83-110.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 0 1-5.66 0l-40-40a4 4 0 0 1 5.66-5.66L128 146.34l37.17-37.17a4 4 0 0 1 5.66 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretCircleDownThin))
export { Memo as IconCaretCircleDownThin }
