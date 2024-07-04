/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBeerStein = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M104 104v80a8 8 0 0 1-16 0v-80a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-80a8 8 0 0 0-8-8m96 16v64a24 24 0 0 1-24 24h-16v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V72c0-30.88 28.71-56 64-56 16.77 0 32.91 5.8 44.82 16H160a40 40 0 0 1 40 40v16h16a24 24 0 0 1 24 24M57 64h125.62A24 24 0 0 0 160 48h-14.26a8 8 0 0 1-5.53-2.22C131.06 37 117.87 32 104 32c-23.18 0-42.57 13.76-47 32m127 144V80H56v128zm40-96a8 8 0 0 0-8-8h-16v80h16a8 8 0 0 0 8-8Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBeerStein))
export { Memo as IconBeerStein }
