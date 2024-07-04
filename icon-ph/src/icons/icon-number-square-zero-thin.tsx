/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareZeroThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 76c-12.82 0-23.41 5.81-30.62 16.81C91.33 102 88 114.52 88 128s3.33 26 9.38 35.2c7.21 11 17.8 16.8 30.62 16.8s23.41-5.81 30.62-16.8c6-9.22 9.38-21.72 9.38-35.2s-3.33-26-9.38-35.19C151.41 81.81 140.82 76 128 76m0 96c-22.11 0-32-22.1-32-44s9.89-44 32-44 32 22.1 32 44-9.89 44-32 44m80-136H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareZeroThin))
export { Memo as IconNumberSquareZeroThin }
