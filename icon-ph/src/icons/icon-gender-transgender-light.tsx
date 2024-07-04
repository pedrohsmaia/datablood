/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderTransgenderLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 34h-48a6 6 0 0 0 0 12h33.52L168 79.52l-19.76-19.76a6 6 0 1 0-8.48 8.49L159.52 88l-18.46 18.46a69.94 69.94 0 1 0 8.49 8.48L168 96.5l19.76 19.76a6 6 0 0 0 8.48-8.49L176.48 88 210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-79 167a58 58 0 1 1 17-41 58 58 0 0 1-17 41"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderTransgenderLight))
export { Memo as IconGenderTransgenderLight }
