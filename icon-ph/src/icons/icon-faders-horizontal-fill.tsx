/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFadersHorizontalFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M32 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m184 88h-24v-16a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-16h24a8 8 0 0 0 0-16m-80 0H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16m-32-56h16a8 8 0 0 0 8-8V88h88a8 8 0 0 0 0-16h-88V56a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFadersHorizontalFill))
export { Memo as IconFadersHorizontalFill }
