/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowCircleDownRight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m40-104v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69l-50.35-50.34a8 8 0 0 1 11.32-11.32L152 140.69V112a8 8 0 0 1 16 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowCircleDownRight))
export { Memo as IconArrowCircleDownRight }
