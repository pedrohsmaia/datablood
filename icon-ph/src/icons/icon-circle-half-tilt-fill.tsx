/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleHalfTiltFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88 88 0 0 1 150.2-62.2L65.8 190.2A87.76 87.76 0 0 1 40 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleHalfTiltFill))
export { Memo as IconCircleHalfTiltFill }
