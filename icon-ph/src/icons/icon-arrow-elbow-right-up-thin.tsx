/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowRightUpThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M226.83 98.83a4 4 0 0 1-5.66 0L180 57.66V192a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h140V57.66l-41.17 41.17a4 4 0 1 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowRightUpThin))
export { Memo as IconArrowElbowRightUpThin }
