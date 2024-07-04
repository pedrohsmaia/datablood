/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScissorsFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M157.73 113.13a8 8 0 0 1 2.09-11.13l67.66-46.3a8 8 0 0 1 9 13.21l-67.67 46.3a8 8 0 0 1-11.12-2.09Zm80.87 85.07a8 8 0 0 1-11.12 2.09L136 137.69l-42.52 29.09a36 36 0 1 1-9-13.2L121.83 128l-37.38-25.58a36 36 0 1 1 9-13.2l143 97.86a8 8 0 0 1 2.15 11.12M72 180a12 12 0 1 0-12 12 12 12 0 0 0 12-12m0-104a12 12 0 1 0-12 12 12 12 0 0 0 12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScissorsFill))
export { Memo as IconScissorsFill }
