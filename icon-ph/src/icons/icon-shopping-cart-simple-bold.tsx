/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShoppingCartSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M100 216a20 20 0 1 1-20-20 20 20 0 0 1 20 20m84-20a20 20 0 1 0 20 20 20 20 0 0 0-20-20m51.47-120.47-27.29 88.7A27.87 27.87 0 0 1 181.41 184H82.93A28.13 28.13 0 0 1 56 163.69L21.81 44H12a12 12 0 0 1 0-24h12.82a20.08 20.08 0 0 1 19.23 14.51L51.34 60H224a12 12 0 0 1 11.47 15.53M207.75 84H58.19l20.89 73.1a4 4 0 0 0 3.85 2.9h98.48a4 4 0 0 0 3.83-2.82Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShoppingCartSimpleBold))
export { Memo as IconShoppingCartSimpleBold }
