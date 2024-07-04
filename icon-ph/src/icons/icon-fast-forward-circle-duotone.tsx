/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFastForwardCircleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96M80 160V96l48 32Zm64 0V96l48 32Z"
          opacity={0.2}
        />
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m4.44-94.66-48-32A8 8 0 0 0 72 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M88 145.05V111l25.58 17Zm108.44-23.71-48-32A8 8 0 0 0 136 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M152 145.05V111l25.58 17Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconFastForwardCircleDuotone))
export { Memo as IconFastForwardCircleDuotone }
