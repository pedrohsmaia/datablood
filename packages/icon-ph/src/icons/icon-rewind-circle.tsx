/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRewindCircle = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m51.77-127a8 8 0 0 0-8.21.39l-48 32a8 8 0 0 0 0 13.32l48 32A8 8 0 0 0 176 168a8 8 0 0 0 8-8V96a8 8 0 0 0-4.23-7M168 145.05 142.42 128 168 111ZM115.77 89a8 8 0 0 0-8.21.39l-48 32a8 8 0 0 0 0 13.32l48 32A8 8 0 0 0 112 168a8 8 0 0 0 8-8V96a8 8 0 0 0-4.23-7M104 145.05 78.42 128 104 111Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRewindCircle))
export { Memo as IconRewindCircle }
