/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleNotchFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 176A72 72 0 0 1 92 65.64a8 8 0 0 1 8 13.85 56 56 0 1 0 56 0 8 8 0 0 1 8-13.85A72 72 0 0 1 128 200"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleNotchFill))
export { Memo as IconCircleNotchFill }
