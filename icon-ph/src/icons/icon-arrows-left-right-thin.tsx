/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsLeftRightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M210.83 173.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L198.34 180H48a4 4 0 0 1 0-8h150.34l-25.17-25.17a4 4 0 0 1 5.66-5.66ZM77.17 114.83a4 4 0 0 0 5.66-5.66L57.66 84H208a4 4 0 0 0 0-8H57.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsLeftRightThin))
export { Memo as IconArrowsLeftRightThin }
