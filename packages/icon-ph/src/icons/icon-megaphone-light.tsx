/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMegaphoneLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M238 120a46.05 46.05 0 0 0-46-46h-39.85c-2.58-.14-54.1-3.56-103.15-44.7A14 14 0 0 0 26 40v160a13.85 13.85 0 0 0 8.07 12.68A14.16 14.16 0 0 0 40 214a13.9 13.9 0 0 0 9-3.3c40-33.52 81.57-42 97-44.07v34a14 14 0 0 0 6.23 11.65l11 7.33a14 14 0 0 0 21.32-8.17l12.13-45.71A46.07 46.07 0 0 0 238 120M41.29 201.52A2 2 0 0 1 38 200V40a1.9 1.9 0 0 1 1.15-1.8A2.08 2.08 0 0 1 40 38a1.91 1.91 0 0 1 1.26.48c44 36.92 89 45.19 104.71 47v69c-15.68 1.85-60.67 10.13-104.68 47.04m131.64 7a2 2 0 0 1-3.05 1.18l-11-7.33a2 2 0 0 1-.89-1.67V166h26.2ZM192 154h-34V86h34a34 34 0 1 1 0 68"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMegaphoneLight))
export { Memo as IconMegaphoneLight }
