/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberZeroLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M181.56 64.28C169 44.47 150.43 34 128 34S87.05 44.47 74.44 64.28C63.84 80.94 58 103.57 58 128s5.84 47.06 16.44 63.72C87.05 211.53 105.57 222 128 222s40.95-10.47 53.56-30.28C192.16 175.06 198 152.43 198 128s-5.84-47.06-16.44-63.72M128 210c-40.07 0-58-41.18-58-82s17.93-82 58-82 58 41.18 58 82-17.93 82-58 82"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberZeroLight))
export { Memo as IconNumberZeroLight }
