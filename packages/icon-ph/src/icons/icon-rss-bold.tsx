/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRssBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M101.74 154.26A75.53 75.53 0 0 1 124 208a12 12 0 0 1-24 0 52 52 0 0 0-52-52 12 12 0 0 1 0-24 75.51 75.51 0 0 1 53.74 22.26M48 84a12 12 0 0 0 0 24 100 100 0 0 1 100 100 12 12 0 0 0 24 0A124 124 0 0 0 48 84m121.62 2.38A170.85 170.85 0 0 0 48 36a12 12 0 0 0 0 24 147 147 0 0 1 104.65 43.35A147 147 0 0 1 196 208a12 12 0 0 0 24 0 170.85 170.85 0 0 0-50.38-121.62M52 188a16 16 0 1 0 16 16 16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRssBold))
export { Memo as IconRssBold }
