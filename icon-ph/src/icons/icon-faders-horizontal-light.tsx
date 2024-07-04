/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFadersHorizontalLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M34 80a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m182 90h-42v-18a6 6 0 0 0-12 0v48a6 6 0 0 0 12 0v-18h42a6 6 0 0 0 0-12m-80 0H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m-32-60a6 6 0 0 0 6-6V86h106a6 6 0 0 0 0-12H110V56a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFadersHorizontalLight))
export { Memo as IconFadersHorizontalLight }
