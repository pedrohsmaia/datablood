/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClockCountdownBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 137A108.13 108.13 0 1 1 119 20a12 12 0 0 1 2 24 84.12 84.12 0 1 0 91 91 12 12 0 1 1 24 2M116 76v52a12 12 0 0 0 12 12h52a12 12 0 0 0 0-24h-40V76a12 12 0 0 0-24 0m92 20a16 16 0 1 0-16-16 16 16 0 0 0 16 16m-32-32a16 16 0 1 0-16-16 16 16 0 0 0 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconClockCountdownBold))
export { Memo as IconClockCountdownBold }
