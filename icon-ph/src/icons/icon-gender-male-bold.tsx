/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderMaleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 28h-48a12 12 0 0 0 0 24h19l-32.72 32.74a84 84 0 1 0 17 17L204 69v19a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12m-69.59 166.46a60 60 0 1 1 0-84.87 60.1 60.1 0 0 1 0 84.87"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderMaleBold))
export { Memo as IconGenderMaleBold }
