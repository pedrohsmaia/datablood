/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlayCircleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m36.44 110.66-48 32A8.05 8.05 0 0 1 112 168a8 8 0 0 1-8-8V96a8 8 0 0 1 12.44-6.66l48 32a8 8 0 0 1 0 13.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlayCircleFill))
export { Memo as IconPlayCircleFill }
