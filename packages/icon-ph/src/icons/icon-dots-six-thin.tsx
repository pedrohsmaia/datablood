/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsSixThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M68 92a8 8 0 1 1-8-8 8 8 0 0 1 8 8m60-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8m68 16a8 8 0 1 0-8-8 8 8 0 0 0 8 8M60 156a8 8 0 1 0 8 8 8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsSixThin))
export { Memo as IconDotsSixThin }
