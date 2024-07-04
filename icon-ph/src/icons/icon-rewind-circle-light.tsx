/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRewindCircleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m46.83-127.29a6 6 0 0 0-6.16.3L122 122.12V96a6 6 0 0 0-9.33-5l-48 32a6 6 0 0 0 0 10l48 32a6 6 0 0 0 9.33-5v-26.12L168.67 165a6 6 0 0 0 9.33-5V96a6 6 0 0 0-3.17-5.29M110 148.79 78.82 128 110 107.21Zm56 0L134.82 128 166 107.21Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRewindCircleLight))
export { Memo as IconRewindCircleLight }
