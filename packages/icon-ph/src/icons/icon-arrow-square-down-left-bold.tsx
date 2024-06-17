/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSquareDownLeftBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM84 160v-48a12 12 0 0 1 24 0v19l43.51-43.52a12 12 0 0 1 17 17L125 148h19a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSquareDownLeftBold))
export { Memo as IconArrowSquareDownLeftBold }
