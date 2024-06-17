/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDiamondsFourBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M114 102.18a19.87 19.87 0 0 0 28.08 0L170.19 74a19.86 19.86 0 0 0 0-28.07L142 17.8a19.89 19.89 0 0 0-28.08 0L85.81 46a19.86 19.86 0 0 0 0 28.07Zm14-64.47L150.28 60 128 82.28 105.72 60ZM238.19 114 210 85.81a19.88 19.88 0 0 0-28.08 0L153.81 114a19.87 19.87 0 0 0 0 28.08L182 170.19a19.89 19.89 0 0 0 28.08 0L238.19 142a19.87 19.87 0 0 0 0-28.08ZM196 150.28 173.72 128 196 105.72 218.28 128ZM108 128a19.73 19.73 0 0 0-5.81-14L74 85.81a19.88 19.88 0 0 0-28.08 0L17.81 114a19.87 19.87 0 0 0 0 28.08L46 170.19a19.89 19.89 0 0 0 28.08 0L102.19 142a19.73 19.73 0 0 0 5.81-14m-48 22.28L37.72 128 60 105.72 82.28 128Zm82 3.53a19.89 19.89 0 0 0-28.08 0L85.81 182a19.86 19.86 0 0 0 0 28.07L114 238.2a19.89 19.89 0 0 0 28.08 0l28.11-28.2a19.86 19.86 0 0 0 0-28.07Zm-14 64.48L105.72 196 128 173.72 150.28 196Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDiamondsFourBold))
export { Memo as IconDiamondsFourBold }
