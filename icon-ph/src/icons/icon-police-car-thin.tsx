/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPoliceCarThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 116h-13.68l-28.54-49.95a12 12 0 0 0-10.42-6H68.64a12 12 0 0 0-10.42 6L29.68 116H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M65.17 70a4 4 0 0 1 3.47-2h118.72a4 4 0 0 1 3.47 2l26.28 46H38.89ZM68 208a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-20h32Zm148 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-32H36v-56h184ZM60 152a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m112 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4M100 32a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPoliceCarThin))
export { Memo as IconPoliceCarThin }
