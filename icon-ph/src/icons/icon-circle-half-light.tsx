/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleHalfLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 12.2a89.86 89.86 0 0 1 20 3.63v172.34a89.86 89.86 0 0 1-20 3.63Zm32 8.23a90.48 90.48 0 0 1 20 12.81v137.52a90.48 90.48 0 0 1-20 12.81ZM38 128a90.12 90.12 0 0 1 84-89.8v179.6A90.12 90.12 0 0 1 38 128m160 56.5v-113a89.81 89.81 0 0 1 0 113"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleHalfLight))
export { Memo as IconCircleHalfLight }
