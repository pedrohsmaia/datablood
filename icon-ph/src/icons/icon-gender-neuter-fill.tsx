/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderNeuterFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M167.84 108.35a40 40 0 1 1-36.19-36.19 40 40 0 0 1 36.19 36.19M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-32 72a56 56 0 1 0-64 55.42v32.31a8.18 8.18 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-32.56A56.09 56.09 0 0 0 184 112"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderNeuterFill))
export { Memo as IconGenderNeuterFill }
