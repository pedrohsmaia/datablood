/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDropHalfBottomThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M171 50.37a250.18 250.18 0 0 0-40.73-37.65 4 4 0 0 0-4.58 0A250.18 250.18 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M189.91 188H66.09a75.63 75.63 0 0 1-11.4-24h146.62a75.63 75.63 0 0 1-11.4 24M53 156a75.41 75.41 0 0 1-1-12 93.38 93.38 0 0 1 .79-12h150.42a93.38 93.38 0 0 1 .79 12 75.41 75.41 0 0 1-1 12ZM90.9 55.77A254 254 0 0 1 128 21a254 254 0 0 1 37.1 34.81c14.37 16.55 31 40.61 36.77 68.23H54.13c5.8-27.66 22.4-51.72 36.77-68.27M128 220a75.77 75.77 0 0 1-55.35-24h110.7A75.77 75.77 0 0 1 128 220"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDropHalfBottomThin))
export { Memo as IconDropHalfBottomThin }
