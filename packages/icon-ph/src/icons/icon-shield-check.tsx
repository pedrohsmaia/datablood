/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShieldCheck = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 40H48a16 16 0 0 0-16 16v58.78c0 89.61 75.82 119.34 91 124.39a15.53 15.53 0 0 0 10 0c15.2-5.05 91-34.78 91-124.39V56a16 16 0 0 0-16-16m0 74.79c0 78.42-66.35 104.62-80 109.18-13.53-4.51-80-30.69-80-109.18V56h160ZM82.34 141.66a8 8 0 0 1 11.32-11.32L112 148.68l50.34-50.34a8 8 0 0 1 11.32 11.32l-56 56a8 8 0 0 1-11.32 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShieldCheck))
export { Memo as IconShieldCheck }
