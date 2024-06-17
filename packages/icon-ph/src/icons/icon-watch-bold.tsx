/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWatchBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 128a79.85 79.85 0 0 0-27.95-60.68L173 28.43A20 20 0 0 0 153.32 12h-50.64A20 20 0 0 0 83 28.43l-7 38.89a79.84 79.84 0 0 0 0 121.36l7 38.89A20 20 0 0 0 102.68 244h50.64A20 20 0 0 0 173 227.57l7.05-38.89A79.85 79.85 0 0 0 208 128M106 36h44l2.9 16a79.76 79.76 0 0 0-49.76 0Zm44 184h-44l-2.9-16a79.76 79.76 0 0 0 49.76 0Zm-22-36a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56m40-56a12 12 0 0 1-12 12h-28a12 12 0 0 1-12-12v-28a12 12 0 0 1 24 0v16h16a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWatchBold))
export { Memo as IconWatchBold }
