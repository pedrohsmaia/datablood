/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowDownLeftBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200.49 72.48 93 180h75a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v75L183.51 55.51a12 12 0 0 1 17 17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowDownLeftBold))
export { Memo as IconArrowDownLeftBold }
