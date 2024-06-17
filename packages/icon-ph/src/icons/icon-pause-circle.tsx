/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPauseCircle = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88M112 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPauseCircle))
export { Memo as IconPauseCircle }
