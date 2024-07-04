/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberFiveFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-76 80a44 44 0 1 1-34.22 71.66 8 8 0 0 1 12.44-10.06 28 28 0 1 0 .35-35.62 8 8 0 0 1-14-6.29l7.55-52.82A8 8 0 0 1 104 64h56a8 8 0 0 1 0 16h-49.06L107 107.4a44 44 0 0 1 17-3.4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberFiveFill))
export { Memo as IconNumberFiveFill }
