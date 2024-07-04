/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCrosshairThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 124h-12.09A92.13 92.13 0 0 0 132 36.09V24a4 4 0 0 0-8 0v12.09A92.13 92.13 0 0 0 36.09 124H24a4 4 0 0 0 0 8h12.09A92.13 92.13 0 0 0 124 219.91V232a4 4 0 0 0 8 0v-12.09A92.13 92.13 0 0 0 219.91 132H232a4 4 0 0 0 0-8m-100 87.9V200a4 4 0 0 0-8 0v11.9A84.11 84.11 0 0 1 44.1 132H56a4 4 0 0 0 0-8H44.1A84.11 84.11 0 0 1 124 44.1V56a4 4 0 0 0 8 0V44.1a84.11 84.11 0 0 1 79.9 79.9H200a4 4 0 0 0 0 8h11.9a84.11 84.11 0 0 1-79.9 79.9M128 92a36 36 0 1 0 36 36 36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCrosshairThin))
export { Memo as IconCrosshairThin }
