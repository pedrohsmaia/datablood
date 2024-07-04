/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChecksDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M240 64v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16"
          opacity={0.2}
        />
        <Path d="m141.66 101.66-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L80 140.69l50.34-50.35a8 8 0 0 1 11.32 11.32m72-11.32a8 8 0 0 0-11.32 0L152 140.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l56-56a8 8 0 0 0 0-11.32" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChecksDuotone))
export { Memo as IconChecksDuotone }
