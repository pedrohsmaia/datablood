/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleZeroBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m0-144c-28.26 0-48 24.67-48 60s19.74 60 48 60 48-24.67 48-60-19.74-60-48-60m0 96c-23.33 0-24-32.32-24-36s.67-36 24-36 24 32.32 24 36-.67 36-24 36"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleZeroBold))
export { Memo as IconNumberCircleZeroBold }
