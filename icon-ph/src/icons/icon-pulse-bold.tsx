/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPulseBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 128a12 12 0 0 1-12 12h-24.58l-36.69 73.37A12 12 0 0 1 160 220h-.6a12 12 0 0 1-10.61-7.72L95 71.15 66.92 133A12 12 0 0 1 56 140H24a12 12 0 0 1 0-24h24.27l36.81-81a12 12 0 0 1 22.13.7l54.28 142.46 27.78-55.56A12 12 0 0 1 200 116h32a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPulseBold))
export { Memo as IconPulseBold }
