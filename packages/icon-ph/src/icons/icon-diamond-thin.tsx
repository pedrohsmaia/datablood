/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDiamondThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m232.5 119.55-96.05-96.06a12 12 0 0 0-16.9 0l-96 96.06a12 12 0 0 0 0 16.9l96.05 96.06a12 12 0 0 0 16.9 0l96.05-96.06a12 12 0 0 0 0-16.9Zm-5.66 11.24-96.05 96.06a4 4 0 0 1-5.58 0l-96-96.06a3.94 3.94 0 0 1 0-5.58l96.05-96.06a4 4 0 0 1 5.58 0l96.05 96.06a3.94 3.94 0 0 1 0 5.58Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDiamondThin))
export { Memo as IconDiamondThin }
