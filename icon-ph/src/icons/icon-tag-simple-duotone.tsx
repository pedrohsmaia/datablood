/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTagSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m240 128-45.62 68.44a8 8 0 0 1-6.66 3.56H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h147.72a8 8 0 0 1 6.66 3.56Z"
          opacity={0.2}
        />
        <Path d="M246.66 123.56 201 55.13A15.94 15.94 0 0 0 187.72 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h147.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88M187.72 192H40V64h147.72l42.66 64Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTagSimpleDuotone))
export { Memo as IconTagSimpleDuotone }
