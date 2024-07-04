/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEqualizerThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M76 96a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-4 28H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-64h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m-48-24h48a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8m48 56h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEqualizerThin))
export { Memo as IconEqualizerThin }
