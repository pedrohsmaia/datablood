/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleSevenThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m27.28-134.29a4 4 0 0 1 .48 3.66l-32 88A4 4 0 0 1 120 180a4.12 4.12 0 0 1-1.37-.24 4 4 0 0 1-2.39-5.13L146.29 92H104a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 1.71"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleSevenThin))
export { Memo as IconNumberCircleSevenThin }
