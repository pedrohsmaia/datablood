/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineUpLeftThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M64 156a4 4 0 0 0 4-4V65.66l105.17 105.17a4 4 0 0 0 5.66-5.66L73.66 60H160a4 4 0 0 0 0-8H64a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineUpLeftThin))
export { Memo as IconArrowLineUpLeftThin }
