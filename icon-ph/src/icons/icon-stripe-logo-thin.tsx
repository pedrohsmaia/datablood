/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStripeLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164 152c0 15.44-16.15 28-36 28s-36-12.56-36-28a4 4 0 0 1 8 0c0 11 12.56 20 28 20s28-9 28-20c0-12.58-11.79-16.92-29.78-22.11-15.22-4.38-32.44-9.35-32.44-25.89 0-16 14.71-28 34.22-28 14.2 0 26.3 6.46 31.55 16.85a4 4 0 1 1-7.13 3.61C148.53 88.78 139.17 84 128 84c-15 0-26.22 8.6-26.22 20 0 9.81 10.07 13.43 26.66 18.21S164 132.46 164 152m56-104v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStripeLogoThin))
export { Memo as IconStripeLogoThin }
