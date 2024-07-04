/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleHalfThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 8.09a91.58 91.58 0 0 1 24 4.27v175.28a91.58 91.58 0 0 1-24 4.27Zm32 7.25a92.21 92.21 0 0 1 24 15v139.35a92.21 92.21 0 0 1-24 15ZM36 128a92.11 92.11 0 0 1 88-91.91v183.82A92.11 92.11 0 0 1 36 128m160 61.9V66.1a91.83 91.83 0 0 1 0 123.8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleHalfThin))
export { Memo as IconCircleHalfThin }
