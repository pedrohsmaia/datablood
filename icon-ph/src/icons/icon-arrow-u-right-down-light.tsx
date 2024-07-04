/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowURightDownLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m220.24 180.24-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L162 209.51V88a50 50 0 0 0-100 0v88a6 6 0 0 1-12 0V88a62 62 0 0 1 124 0v121.51l37.76-37.75a6 6 0 0 1 8.48 8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowURightDownLight))
export { Memo as IconArrowURightDownLight }
