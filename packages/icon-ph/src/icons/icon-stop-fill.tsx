/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStopFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 55.27v145.46A15.29 15.29 0 0 1 200.73 216H55.27A15.29 15.29 0 0 1 40 200.73V55.27A15.29 15.29 0 0 1 55.27 40h145.46A15.29 15.29 0 0 1 216 55.27"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStopFill))
export { Memo as IconStopFill }
