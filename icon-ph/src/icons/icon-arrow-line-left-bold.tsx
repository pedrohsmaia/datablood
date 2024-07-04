/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineLeftBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 128a12 12 0 0 1-12 12H109l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L109 116h115a12 12 0 0 1 12 12M40 28a12 12 0 0 0-12 12v176a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineLeftBold))
export { Memo as IconArrowLineLeftBold }
