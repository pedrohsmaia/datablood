/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrafficCone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 208h-18.31L153.42 34.75A16 16 0 0 0 138.31 24h-20.62a16 16 0 0 0-15.11 10.74L42.31 208H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M95.43 104h65.14l16.7 48H78.73Zm22.26-64h20.62L155 88h-54ZM73.17 168h109.66l13.92 40H59.25Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrafficCone))
export { Memo as IconTrafficCone }
