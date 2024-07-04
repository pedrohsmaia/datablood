/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlarmBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 176a76 76 0 1 1 76-76 76.08 76.08 0 0 1-76 76M32.49 64.49a12 12 0 1 1-17-17l32-32a12 12 0 1 1 17 17Zm208 0a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17l32 32a12 12 0 0 1 0 17M176 116a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12V80a12 12 0 0 1 24 0v36Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlarmBold))
export { Memo as IconAlarmBold }
