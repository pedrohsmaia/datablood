/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHourglassHighBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M184 20H72a20 20 0 0 0-20 20v36a20.1 20.1 0 0 0 8 16l48 36-48 36a20.1 20.1 0 0 0-8 16v36a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-35.64a20.13 20.13 0 0 0-7.94-16L147.9 128l48.16-36.4a20.13 20.13 0 0 0 7.94-16V40a20 20 0 0 0-20-20m-4 24v16H76V44Zm-52 69L89.33 84h77Zm52 99H76v-30l52-39 52 39.33Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHourglassHighBold))
export { Memo as IconHourglassHighBold }
