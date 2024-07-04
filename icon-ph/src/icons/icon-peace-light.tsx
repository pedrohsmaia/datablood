/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPeaceLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102a89.44 89.44 0 0 1-13 46.58l-71-49.7V38.2a90.12 90.12 0 0 1 84 89.8m-96-89.8v86.68l-71 49.7A90 90 0 0 1 122 38.2M57.92 184.4 122 139.53v78.27a89.93 89.93 0 0 1-64.08-33.4M134 217.8v-78.27l64.08 44.87A89.93 89.93 0 0 1 134 217.8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPeaceLight))
export { Memo as IconPeaceLight }
