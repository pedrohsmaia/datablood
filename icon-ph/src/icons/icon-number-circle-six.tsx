/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleSix = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m0-104h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2l-32.23 54A36 36 0 1 0 128 112m0 56a20 20 0 1 1 20-20 20 20 0 0 1-20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleSix))
export { Memo as IconNumberCircleSix }
