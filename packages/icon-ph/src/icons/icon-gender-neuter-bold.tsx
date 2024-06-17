/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderNeuterBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 104a84 84 0 1 0-96 83.13V232a12 12 0 0 0 24 0v-44.87A84.12 84.12 0 0 0 212 104m-84 60a60 60 0 1 1 60-60 60.07 60.07 0 0 1-60 60"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderNeuterBold))
export { Memo as IconGenderNeuterBold }
