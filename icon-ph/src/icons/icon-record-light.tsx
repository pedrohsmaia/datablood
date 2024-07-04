/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRecordLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m0-160a70 70 0 1 0 70 70 70.08 70.08 0 0 0-70-70m0 128a58 58 0 1 1 58-58 58.07 58.07 0 0 1-58 58"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRecordLight))
export { Memo as IconRecordLight }
