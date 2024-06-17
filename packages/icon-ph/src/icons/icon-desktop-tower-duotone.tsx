/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDesktopTowerDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M240 48v160a8 8 0 0 1-8 8h-80a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M24 96v72a8 8 0 0 0 8 8h80a8 8 0 0 1 0 16H96v16h16a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h16v-16H32a24 24 0 0 1-24-24V96a24 24 0 0 1 24-24h80a8 8 0 0 1 0 16H32a8 8 0 0 0-8 8m184-32h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m0 32h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m40-48v160a16 16 0 0 1-16 16h-80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16m-16 160V48h-80v160zm-40-40a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconDesktopTowerDuotone))
export { Memo as IconDesktopTowerDuotone }
