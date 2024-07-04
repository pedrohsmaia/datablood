/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextAlignLeftLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 46h128a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 28H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m-48 40H40a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextAlignLeftLight))
export { Memo as IconTextAlignLeftLight }
