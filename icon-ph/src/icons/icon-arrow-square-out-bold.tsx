/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSquareOutBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 104a12 12 0 0 1-24 0V69l-59.51 59.51a12 12 0 0 1-17-17L187 52h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12Zm-44 24a12 12 0 0 0-12 12v64H52V84h64a12 12 0 0 0 0-24H48a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-68a12 12 0 0 0-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSquareOutBold))
export { Memo as IconArrowSquareOutBold }
