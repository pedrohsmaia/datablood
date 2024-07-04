/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderIntersexThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28h-40a4 4 0 0 0 0 8h30.34l-34.79 34.79A60 60 0 1 0 116 171.85V196H88a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8h-28v-24.15A59.94 59.94 0 0 0 168.68 77L204 41.66V72a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-88 136a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderIntersexThin))
export { Memo as IconGenderIntersexThin }
