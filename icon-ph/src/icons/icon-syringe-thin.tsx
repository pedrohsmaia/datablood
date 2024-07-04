/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSyringeThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m234.83 69.17-48-48a4 4 0 0 0-5.66 5.66L202.34 48 168 82.34l-37.17-37.17a4 4 0 1 0-5.66 5.66l9.17 9.17-86.83 86.83a12 12 0 0 0-3.51 8.48v51l-22.83 22.86a4 4 0 0 0 5.66 5.66L49.66 212h51a11.93 11.93 0 0 0 8.48-3.51L196 121.66l9.17 9.17a4 4 0 0 0 5.66-5.66L173.66 88 208 53.66l21.17 21.17a4 4 0 1 0 5.66-5.66M103.51 202.83a4 4 0 0 1-2.82 1.17H52v-48.69a4 4 0 0 1 1.17-2.82L74 131.66l23.17 23.17a4 4 0 1 0 5.66-5.66L79.66 126 98 107.66l23.17 23.17a4 4 0 0 0 5.66-5.66L103.66 102 140 65.66l25.17 25.17L190.34 116Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSyringeThin))
export { Memo as IconSyringeThin }
