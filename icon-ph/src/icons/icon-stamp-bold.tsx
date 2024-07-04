/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStampBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 224a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m0-80v32a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-32a20 20 0 0 1 20-20h51.48L84.81 55.54A36 36 0 0 1 120 12h16a36 36 0 0 1 35.2 43.54L156.52 124H208a20 20 0 0 1 20 20m-104-20h8l15.74-73.49A12 12 0 0 0 136 36h-16a12 12 0 0 0-11.73 14.51Zm80 24H52v24h152Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStampBold))
export { Memo as IconStampBold }
