/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDevToLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M80 120v16a16 16 0 0 1-16 16v-48a16 16 0 0 1 16 16m168-48v112a16 16 0 0 1-16 16H24a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h208a16 16 0 0 1 16 16M96 120a32 32 0 0 0-32-32h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a32 32 0 0 0 32-32Zm32 0v-16h16a8 8 0 0 0 0-16h-24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h24a8 8 0 0 0 0-16h-16v-16h8a8 8 0 0 0 0-16Zm82.17-31.7a8 8 0 0 0-9.87 5.53L190 130.45l-10.3-36.62a8 8 0 0 0-15.4 4.34l18 64a8 8 0 0 0 15.4 0l18-64a8 8 0 0 0-5.53-9.87"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDevToLogoFill))
export { Memo as IconDevToLogoFill }
