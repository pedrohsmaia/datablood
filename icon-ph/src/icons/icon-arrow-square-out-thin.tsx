/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSquareOutThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 104a4 4 0 0 1-8 0V49.66l-73.16 73.17a4 4 0 0 1-5.66-5.66L206.34 44H152a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-36 28a4 4 0 0 0-4 4v72a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h72a4 4 0 0 0 0-8H48a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-72a4 4 0 0 0-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSquareOutThin))
export { Memo as IconArrowSquareOutThin }
