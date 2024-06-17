/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsSixDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M240 64v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16"
          opacity={0.2}
        />
        <Path d="M72 92a12 12 0 1 1-12-12 12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12 12 12 0 0 0 12 12M60 152a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDotsSixDuotone))
export { Memo as IconDotsSixDuotone }
