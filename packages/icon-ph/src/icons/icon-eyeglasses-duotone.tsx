/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEyeglassesDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M104 164a36 36 0 1 1-36-36 36 36 0 0 1 36 36m84-36a36 36 0 1 0 36 36 36 36 0 0 0-36-36"
          opacity={0.2}
        />
        <Path d="M200 40a8 8 0 0 0 0 16 16 16 0 0 1 16 16v58.08A44 44 0 0 0 145.68 152h-35.36A44 44 0 0 0 40 130.08V72a16 16 0 0 1 16-16 8 8 0 0 0 0-16 32 32 0 0 0-32 32v92a44 44 0 0 0 87.81 4h32.38a44 44 0 0 0 87.81-4V72a32 32 0 0 0-32-32M68 192a28 28 0 1 1 28-28 28 28 0 0 1-28 28m120 0a28 28 0 1 1 28-28 28 28 0 0 1-28 28" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconEyeglassesDuotone))
export { Memo as IconEyeglassesDuotone }
