/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconThermometerFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 56a28 28 0 1 0 28 28 28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12m-60 50.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M136 80h-32V40a16 16 0 0 1 32 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconThermometerFill))
export { Memo as IconThermometerFill }
