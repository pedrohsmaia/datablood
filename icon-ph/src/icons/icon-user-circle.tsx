/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserCircle = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0 87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32 32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75 48 48 0 1 0-59.4 0 79.66 79.66 0 0 0-36.06 28.75 88 88 0 1 1 131.52 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserCircle))
export { Memo as IconUserCircle }
