/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsIn = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 104V64a8 8 0 0 1 16 0v20.69l42.34-42.35a8 8 0 0 1 11.32 11.32L171.31 96H192a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8m-40 40H64a8 8 0 0 0 0 16h20.69l-42.35 42.34a8 8 0 0 0 11.32 11.32L96 171.31V192a8 8 0 0 0 16 0v-40a8 8 0 0 0-8-8m67.31 16H192a8 8 0 0 0 0-16h-40a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0v-20.69l42.34 42.35a8 8 0 0 0 11.32-11.32ZM104 56a8 8 0 0 0-8 8v20.69L53.66 42.34a8 8 0 0 0-11.32 11.32L84.69 96H64a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsIn))
export { Memo as IconArrowsIn }
