/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShuffleSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 48v40a12 12 0 0 1-24 0V77l-31.23 31.2a12 12 0 0 1-17-17L179 60h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-12 108a12 12 0 0 0-12 12v11L56.49 39.51a12 12 0 0 0-17 17L179 196h-11a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12m-116.77-8.2-51.72 51.71a12 12 0 0 0 17 17l51.71-51.72a12 12 0 0 0-17-17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShuffleSimpleBold))
export { Memo as IconShuffleSimpleBold }
