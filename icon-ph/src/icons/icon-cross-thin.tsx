/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCrossThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 76h-40a4 4 0 0 1-4-4V32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v40a4 4 0 0 1-4 4H56a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h40a4 4 0 0 1 4 4v88a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-88a4 4 0 0 1 4-4h40a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 44a4 4 0 0 1-4 4h-40a12 12 0 0 0-12 12v88a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-88a12 12 0 0 0-12-12H56a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h40a12 12 0 0 0 12-12V32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v40a12 12 0 0 0 12 12h40a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCrossThin))
export { Memo as IconCrossThin }
