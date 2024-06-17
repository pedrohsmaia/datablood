/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatDownThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M227.7 134.47A4 4 0 0 0 224 132h-44V48a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v84H32a4 4 0 0 0-2.83 6.83l96 96a4 4 0 0 0 5.66 0l96-96a4 4 0 0 0 .87-4.36M128 226.34 41.66 140H80a4 4 0 0 0 4-4V48a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v88a4 4 0 0 0 4 4h38.34Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatDownThin))
export { Memo as IconArrowFatDownThin }
