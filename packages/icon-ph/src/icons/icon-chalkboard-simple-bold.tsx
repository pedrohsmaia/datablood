/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChalkboardSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M20 160V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20v104a12 12 0 0 1-24 0V60H44v100a12 12 0 0 1-24 0m232 40a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h92v-28a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v28h44a12 12 0 0 1 12 12m-120-12h40v-16h-40Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChalkboardSimpleBold))
export { Memo as IconChalkboardSimpleBold }
