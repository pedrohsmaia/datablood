/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconThermometerSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 146.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M128 24a16 16 0 0 1 16 16v40h-32V40a16 16 0 0 1 16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconThermometerSimpleFill))
export { Memo as IconThermometerSimpleFill }
