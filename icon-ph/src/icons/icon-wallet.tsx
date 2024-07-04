/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWallet = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 72H56a8 8 0 0 1 0-16h136a8 8 0 0 0 0-16H56a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h160a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 128H56a8 8 0 0 1-8-8V86.63A23.84 23.84 0 0 0 56 88h160Zm-48-60a12 12 0 1 1 12 12 12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWallet))
export { Memo as IconWallet }
