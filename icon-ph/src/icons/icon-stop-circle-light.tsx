/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStopCircleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m24-120h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6m-6 48h-36v-36h36Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStopCircleLight))
export { Memo as IconStopCircleLight }
