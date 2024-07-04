/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFastForwardCircleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m60.59 110.55-40 28A8 8 0 0 1 136 156v-28a8 8 0 0 1-3.41 6.55l-40 28A8 8 0 0 1 80 156v-56a8 8 0 0 1 12.59-6.55l40 28A8 8 0 0 1 136 128v-28a8 8 0 0 1 12.59-6.55l40 28a8 8 0 0 1 0 13.1"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFastForwardCircleFill))
export { Memo as IconFastForwardCircleFill }
