/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderNonbinaryLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M134 98.27V58.6l30.91 18.54a6 6 0 1 0 6.18-10.28L139.66 48l31.43-18.85a6 6 0 1 0-6.18-10.29L128 41 91.09 18.86a6 6 0 1 0-6.18 10.29L116.34 48 84.91 66.86a6 6 0 1 0 6.18 10.28L122 58.6v39.67a70 70 0 1 0 12 0M128 226a58 58 0 1 1 58-58 58.07 58.07 0 0 1-58 58"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderNonbinaryLight))
export { Memo as IconGenderNonbinaryLight }
