/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhosphorLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 24H64a8 8 0 0 0-8 8v128a80.09 80.09 0 0 0 80 80 8 8 0 0 0 8-8v-64a72 72 0 0 0 0-144m-16 199.5A64.14 64.14 0 0 1 72.51 168H128Zm0-94L77.68 40H128Zm16 22.5V40a56 56 0 0 1 0 112"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPhosphorLogoFill))
export { Memo as IconPhosphorLogoFill }
