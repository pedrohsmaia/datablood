/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareTwoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-56 136a8 8 0 0 1 0 16h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15 8 8 0 0 1-15.09-5.34 32 32 0 1 1 55.74 29.93L120 168Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareTwoFill))
export { Memo as IconNumberSquareTwoFill }
