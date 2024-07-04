/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberFourLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M182 152a6 6 0 0 1-6 6h-18v50a6 6 0 0 1-12 0v-50H72a6 6 0 0 1-5.65-8l40-112a6 6 0 0 1 11.3 4L80.51 146H146V96a6 6 0 0 1 12 0v50h18a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberFourLight))
export { Memo as IconNumberFourLight }
