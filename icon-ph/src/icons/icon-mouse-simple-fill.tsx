/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMouseSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m-8 96a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMouseSimpleFill))
export { Memo as IconMouseSimpleFill }
