/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconQuotesBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M100 52H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28 12 12 0 0 0 0 24 52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20m-4 80H44V76h52Zm120-80h-60a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28 12 12 0 0 0 0 24 52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20m-4 80h-52V76h52Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconQuotesBold))
export { Memo as IconQuotesBold }
