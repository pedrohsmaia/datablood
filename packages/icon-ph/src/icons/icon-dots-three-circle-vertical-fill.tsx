/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsThreeCircleVerticalFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 128a104 104 0 1 0-104 104 104.13 104.13 0 0 0 104-104M116 84a12 12 0 1 1 12 12 12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12 12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12 12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsThreeCircleVerticalFill))
export { Memo as IconDotsThreeCircleVerticalFill }
