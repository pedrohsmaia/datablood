/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesThreeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 120a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44m60 8a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m-120 0a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesThreeFill))
export { Memo as IconCirclesThreeFill }
