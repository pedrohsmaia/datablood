/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeartFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHeartFill))
export { Memo as IconHeartFill }
