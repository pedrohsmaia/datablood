/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAngularLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 104.47 141.07 128h-26.14Zm103.93-31.41-16 120a8 8 0 0 1-4.35 6.1l-80 40a8 8 0 0 1-7.16 0l-80-40a8 8 0 0 1-4.35-6.1l-16-120a8 8 0 0 1 4.85-8.44l96-40a7.93 7.93 0 0 1 6.16 0l96 40a8 8 0 0 1 4.85 8.44M175 156.12l-40-72a8 8 0 0 0-14 0l-40 72a8 8 0 1 0 14 7.76L106 144h44l11 19.88a8 8 0 1 0 14-7.76"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAngularLogoFill))
export { Memo as IconAngularLogoFill }
