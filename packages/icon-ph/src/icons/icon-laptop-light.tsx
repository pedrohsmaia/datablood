/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLaptopLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 170h-10V72a22 22 0 0 0-22-22H56a22 22 0 0 0-22 22v98H24a6 6 0 0 0-6 6v16a22 22 0 0 0 22 22h176a22 22 0 0 0 22-22v-16a6 6 0 0 0-6-6M46 72a10 10 0 0 1 10-10h144a10 10 0 0 1 10 10v98H46Zm180 120a10 10 0 0 1-10 10H40a10 10 0 0 1-10-10v-10h196ZM150 88a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLaptopLight))
export { Memo as IconLaptopLight }
