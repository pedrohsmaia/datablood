/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTennisBallLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200.16 55.88a102 102 0 1 0 0 144.24 101.4 101.4 0 0 0 0-144.24M64.33 64.36a89.62 89.62 0 0 1 57.25-26.07 89.32 89.32 0 0 1-26.12 57.18 89.38 89.38 0 0 1-57.21 26.11 89.61 89.61 0 0 1 26.08-57.22M38.2 133.63A101.36 101.36 0 0 0 104 104a101.24 101.24 0 0 0 29.68-65.72 89.76 89.76 0 0 1 84.17 84.13 102 102 0 0 0-95.43 95.39 89.76 89.76 0 0 1-84.22-84.17m153.47 58a89.63 89.63 0 0 1-57.25 26.06 89.94 89.94 0 0 1 83.33-83.28 89.61 89.61 0 0 1-26.08 57.23Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTennisBallLight))
export { Memo as IconTennisBallLight }
