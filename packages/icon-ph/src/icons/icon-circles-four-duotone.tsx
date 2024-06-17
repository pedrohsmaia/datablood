/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesFourDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M112 80a32 32 0 1 1-32-32 32 32 0 0 1 32 32m64 32a32 32 0 1 0-32-32 32 32 0 0 0 32 32m-96 32a32 32 0 1 0 32 32 32 32 0 0 0-32-32m96 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32"
          opacity={0.2}
        />
        <Path d="M80 40a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24m96 16a40 40 0 1 0-40-40 40 40 0 0 0 40 40m0-64a24 24 0 1 1-24 24 24 24 0 0 1 24-24m-96 80a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24m96-64a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesFourDuotone))
export { Memo as IconCirclesFourDuotone }
