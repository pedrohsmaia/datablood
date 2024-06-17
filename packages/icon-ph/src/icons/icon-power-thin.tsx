/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPowerThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M124 128V48a4 4 0 0 1 8 0v80a4 4 0 0 1-8 0m54.18-75.35a4 4 0 1 0-4.36 6.7C198.08 75.17 212 100.2 212 128a84 84 0 0 1-168 0c0-27.8 13.92-52.83 38.18-68.65a4 4 0 0 0-4.36-6.7C51.24 70 36 97.44 36 128a92 92 0 0 0 184 0c0-30.56-15.24-58-41.82-75.35"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPowerThin))
export { Memo as IconPowerThin }
