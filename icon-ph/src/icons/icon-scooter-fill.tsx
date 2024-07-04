/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScooterFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 172a32 32 0 1 1-49.38-26.85l-7.35-22-45 57.8A8 8 0 0 1 136 184H73.66a32 32 0 1 1 2.08-16h56.35l49.1-63.13L162.23 48H136a8 8 0 0 1 0-16h32a8 8 0 0 1 7.59 5.47l34.21 102.61c.72-.05 1.46-.08 2.2-.08a32 32 0 0 1 32 32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScooterFill))
export { Memo as IconScooterFill }
