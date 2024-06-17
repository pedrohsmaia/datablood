/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCookingPotThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 48V16a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0m36 4a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 0a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m90.4 47.2L220 122v62a28 28 0 0 1-28 28H64a28 28 0 0 1-28-28v-62L5.6 99.2a4 4 0 0 1 4.8-6.4L36 112V88a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12v24l25.6-19.2a4 4 0 1 1 4.8 6.4M212 88a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v96a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCookingPotThin))
export { Memo as IconCookingPotThin }
