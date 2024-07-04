/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSquareRightBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM76 128a12 12 0 0 1 12-12h51l-11.52-11.51a12 12 0 1 1 17-17l32 32a12 12 0 0 1 0 17l-32 32a12 12 0 1 1-17-17L139 140H88a12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSquareRightBold))
export { Memo as IconArrowSquareRightBold }
