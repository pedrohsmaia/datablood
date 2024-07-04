/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAngularLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m225.54 68.31-96-40a4 4 0 0 0-3.08 0l-96 40A4 4 0 0 0 28 72.53l16 120a4 4 0 0 0 2.17 3.05l80 40a4 4 0 0 0 3.58 0l80-40a4 4 0 0 0 2.17-3.05l16-120a4 4 0 0 0-2.38-4.22m-21.22 121.06L128 227.53l-76.32-38.16L36.37 74.51 128 36.33l91.63 38.18ZM124.5 86.06l-40 72a4 4 0 1 0 7 3.88L103.69 140h48.62l12.19 21.94a4 4 0 1 0 7-3.88l-40-72a4 4 0 0 0-7 0M147.87 132h-39.74L128 96.24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAngularLogoThin))
export { Memo as IconAngularLogoThin }
