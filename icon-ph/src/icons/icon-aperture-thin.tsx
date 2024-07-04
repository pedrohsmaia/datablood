/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconApertureThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M198.71 57.29A100 100 0 1 0 57.29 198.71 100 100 0 1 0 198.71 57.29m10.37 114.27-61-11.14L210.4 87a92.26 92.26 0 0 1-1.32 84.52ZM95.87 122.13 117 97.24l32.14 5.86 11 30.77L139 158.76l-32.14-5.86Zm110.37-42.55-40.13 47.25-32.36-90.63a92.09 92.09 0 0 1 72.49 43.38M63 63a91.31 91.31 0 0 1 62.26-26.88L146 94.41l-94.68-17.3A92.94 92.94 0 0 1 63 63M47 84.49l61 11.14L45.6 169a92.26 92.26 0 0 1 1.32-84.52Zm2.84 92 40.13-47.25 32.36 90.63a92.09 92.09 0 0 1-72.49-43.38m143.29 16.63A91.31 91.31 0 0 1 130.87 220L110 161.59l94.72 17.3a92.94 92.94 0 0 1-11.67 14.16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconApertureThin))
export { Memo as IconApertureThin }
