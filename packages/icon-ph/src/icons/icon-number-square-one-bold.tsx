/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareOneBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM98 102.66A12 12 0 0 1 101.34 86l24-16A12 12 0 0 1 144 80v96a12 12 0 0 1-24 0v-73.58l-5.34 3.58A12 12 0 0 1 98 102.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareOneBold))
export { Memo as IconNumberSquareOneBold }
