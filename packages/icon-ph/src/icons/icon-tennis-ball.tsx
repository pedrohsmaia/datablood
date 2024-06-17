/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTennisBall = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M201.57 54.46a104 104 0 1 0 0 147.08 103.4 103.4 0 0 0 0-147.08M65.75 65.77a87.63 87.63 0 0 1 53.66-25.31A87.31 87.31 0 0 1 94 94.06a87.42 87.42 0 0 1-53.62 25.35 87.58 87.58 0 0 1 25.37-53.64m-25.42 69.71a103.29 103.29 0 0 0 65-30.11 103.24 103.24 0 0 0 30.13-65 87.78 87.78 0 0 1 80.18 80.14 104 104 0 0 0-95.16 95.1 87.78 87.78 0 0 1-80.18-80.14Zm149.92 54.75a87.69 87.69 0 0 1-53.66 25.31 88 88 0 0 1 79-78.95 87.58 87.58 0 0 1-25.34 53.64"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTennisBall))
export { Memo as IconTennisBall }
