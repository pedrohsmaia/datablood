/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconThermometerSimple = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 153V88a8 8 0 0 0-16 0v65a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16 16 16 0 0 1-16 16m40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0m-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 104 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 128 232"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconThermometerSimple))
export { Memo as IconThermometerSimple }
