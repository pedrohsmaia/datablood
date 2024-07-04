/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWaveSquareThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 128v56a4 4 0 0 1-4 4H128a4 4 0 0 1-4-4V76H28v52a4 4 0 0 1-8 0V72a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v108h96v-52a4 4 0 0 1 8 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWaveSquareThin))
export { Memo as IconWaveSquareThin }
