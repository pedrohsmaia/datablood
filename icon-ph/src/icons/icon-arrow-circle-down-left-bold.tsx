/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowCircleDownLeftBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m40.49-124.49a12 12 0 0 1 0 17L125 148h19a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v19l43.51-43.52a12 12 0 0 1 16.98.03"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowCircleDownLeftBold))
export { Memo as IconArrowCircleDownLeftBold }
