/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWindowsLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 140h-80a4 4 0 0 0-4 4v57.45a4 4 0 0 0 3.28 3.94l80 14.55a4.37 4.37 0 0 0 .72.06 4 4 0 0 0 2.56-.93A4 4 0 0 0 220 216v-72a4 4 0 0 0-4-4m-4 71.21-72-13.09V148h72ZM104 140H40a4 4 0 0 0-4 4v40a4 4 0 0 0 3.28 3.94l64 11.63a3.51 3.51 0 0 0 .72.07 4 4 0 0 0 4-4V144a4 4 0 0 0-4-4m-4 50.84-56-10.18V148h56ZM218.56 36.93a4 4 0 0 0-3.28-.87l-80 14.55a4 4 0 0 0-3.28 3.94V112a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4V40a4 4 0 0 0-1.44-3.07M212 108h-72V57.88l72-13.09ZM103.28 56.43l-64 11.63A4 4 0 0 0 36 72v40a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V60.36a4 4 0 0 0-4.72-3.93M100 108H44V75.34l56-10.18Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWindowsLogoThin))
export { Memo as IconWindowsLogoThin }
