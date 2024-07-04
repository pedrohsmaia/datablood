/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowUUpLeftBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 144a68.07 68.07 0 0 1-68 68H80a12 12 0 0 1 0-24h88a44 44 0 0 0 0-88H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L61 76h107a68.08 68.08 0 0 1 68 68"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowUUpLeftBold))
export { Memo as IconArrowUUpLeftBold }
