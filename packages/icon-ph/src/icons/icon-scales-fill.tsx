/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScalesFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m239.43 133-32-80a8 8 0 0 0-7.43-5 8.27 8.27 0 0 0-1.73.21L136 62V40a8 8 0 0 0-16 0v25.58L54.27 80.21a8 8 0 0 0-5.7 4.79l-32 80a7.92 7.92 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.92 7.92 0 0 0-.57-3L66.92 93.77 120 82v126h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16h-16V78.42l51-11.32-26.43 65.9a7.92 7.92 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.92 7.92 0 0 0-.57-3m-160 35H32.62L56 109.54Zm97.24-32L200 77.54 223.38 136Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScalesFill))
export { Memo as IconScalesFill }
