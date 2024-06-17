/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRainbowThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180 168v16a4 4 0 0 1-8 0v-16a44 44 0 0 0-88 0v16a4 4 0 0 1-8 0v-16a52 52 0 0 1 104 0m-52-84a84.09 84.09 0 0 0-84 84v16a4 4 0 0 0 8 0v-16a76 76 0 0 1 152 0v16a4 4 0 0 0 8 0v-16a84.09 84.09 0 0 0-84-84m0-32A116.13 116.13 0 0 0 12 168v16a4 4 0 0 0 8 0v-16a108 108 0 0 1 216 0v16a4 4 0 0 0 8 0v-16A116.13 116.13 0 0 0 128 52"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRainbowThin))
export { Memo as IconRainbowThin }
