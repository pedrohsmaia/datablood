/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowCounterClockwiseLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 128a94 94 0 0 1-92.74 94H128a93.43 93.43 0 0 1-64.5-25.65 6 6 0 1 1 8.24-8.72A82 82 0 1 0 70 70l-.19.19L39.44 98H72a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6V56a6 6 0 0 1 12 0v34.34L61.63 61.4A94 94 0 0 1 222 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowCounterClockwiseLight))
export { Memo as IconArrowCounterClockwiseLight }
