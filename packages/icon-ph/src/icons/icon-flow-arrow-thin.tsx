/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlowArrowThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m242.83 77.17-32-32a4 4 0 0 0-5.66 5.66L230.34 76H192a69.84 69.84 0 0 0-26.68 6.37c-12.73 5.88-28.85 18.45-33.27 45-6.41 38.49-37.53 43.87-48.29 44.57a36 36 0 1 0 0 8 67.53 67.53 0 0 0 22.71-5.54c12.73-5.65 28.86-18.17 33.45-45.71C147.28 84.67 190.18 84 192 84h38.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66M48 204a28 28 0 1 1 28-28 28 28 0 0 1-28 28"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFlowArrowThin))
export { Memo as IconFlowArrowThin }
