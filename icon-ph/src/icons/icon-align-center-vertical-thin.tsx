/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignCenterVerticalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 124h-20V72a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v52h-24V48a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v76H32a4 4 0 0 0 0 8h20v76a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-76h24v52a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-52h20a4 4 0 0 0 0-8m-116 84a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Zm88-24a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignCenterVerticalThin))
export { Memo as IconAlignCenterVerticalThin }
