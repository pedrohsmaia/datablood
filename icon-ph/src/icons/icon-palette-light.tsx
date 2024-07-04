/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaletteLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M199.37 55.31A101.32 101.32 0 0 0 128 26h-1A102 102 0 0 0 26 128c0 42.09 26.07 77.44 68 92.26a30.21 30.21 0 0 0 10.11 1.74A30.06 30.06 0 0 0 134 192a18 18 0 0 1 18-18h46.21a29.82 29.82 0 0 0 29.25-23.31 102.71 102.71 0 0 0 2.54-23.58 101.25 101.25 0 0 0-30.63-71.8M215.76 148a17.89 17.89 0 0 1-17.55 14H152a30 30 0 0 0-30 30 18 18 0 0 1-24 17c-37-13.14-60-44.15-60-81a90 90 0 0 1 89.07-90h.93a90.34 90.34 0 0 1 90 89.22 90.46 90.46 0 0 1-2.24 20.78M138 76a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-44 24a10 10 0 1 1-10-10 10 10 0 0 1 10 10m0 56a10 10 0 1 1-10-10 10 10 0 0 1 10 10m88-56a10 10 0 1 1-10-10 10 10 0 0 1 10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaletteLight))
export { Memo as IconPaletteLight }
