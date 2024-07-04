/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFirstAidKitThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 68h-44V56a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 56a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm128 152a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-64-64a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFirstAidKitThin))
export { Memo as IconFirstAidKitThin }
