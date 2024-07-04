/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPasswordFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M64 168a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm73.3-39.81-12.36 4 7.64 10.5a8 8 0 1 1-13 9.41L112 141.61l-7.63 10.51a8 8 0 1 1-13-9.41l7.64-10.5-12.36-4a8 8 0 1 1 5-15.21l12.35 4v-13a8 8 0 0 1 16 0v13l12.35-4a8 8 0 1 1 5 15.21Zm72 0-12.36 4 7.64 10.5a8 8 0 1 1-13 9.41L184 141.61l-7.63 10.51a8 8 0 1 1-13-9.41l7.64-10.5-12.36-4a8 8 0 1 1 5-15.21l12.35 4v-13a8 8 0 0 1 16 0v13l12.35-4a8 8 0 0 1 5 15.21Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPasswordFill))
export { Memo as IconPasswordFill }
