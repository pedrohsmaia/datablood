/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlobeStandThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 172a76 76 0 1 0-76-76 76.08 76.08 0 0 0 76 76m0-144a68 68 0 1 1-68 68 68.07 68.07 0 0 1 68-68m74.89 140.28a4 4 0 0 1-.12 5.65 107.31 107.31 0 0 1-70.77 30V228h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28v-24.08A108 108 0 0 1 50.06 21.23a4 4 0 1 1 5.77 5.54 100 100 0 0 0 141.4 141.39 4 4 0 0 1 5.66.12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGlobeStandThin))
export { Memo as IconGlobeStandThin }
