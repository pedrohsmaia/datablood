/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWaveSquareLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M238 128v56a6 6 0 0 1-6 6H128a6 6 0 0 1-6-6V78H30v50a6 6 0 0 1-12 0V72a6 6 0 0 1 6-6h104a6 6 0 0 1 6 6v106h92v-50a6 6 0 0 1 12 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWaveSquareLight))
export { Memo as IconWaveSquareLight }
