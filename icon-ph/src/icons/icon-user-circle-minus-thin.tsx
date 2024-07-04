/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserCircleMinusThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172 56a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4m54.62 55.34a99.89 99.89 0 1 1-82-82 4 4 0 0 1-1.32 7.89A93.4 93.4 0 0 0 128 36a92 92 0 0 0-65.17 156.87 75.61 75.61 0 0 1 44.51-34 44 44 0 1 1 41.32 0 75.61 75.61 0 0 1 44.51 34A91.69 91.69 0 0 0 220 128a93.58 93.58 0 0 0-1.27-15.34 4 4 0 0 1 7.89-1.32M128 156a36 36 0 1 0-36-36 36 36 0 0 0 36 36m0 64a91.61 91.61 0 0 0 59.14-21.58 68 68 0 0 0-118.27 0A91.56 91.56 0 0 0 128 220"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserCircleMinusThin))
export { Memo as IconUserCircleMinusThin }
