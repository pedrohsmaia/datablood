/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconInfoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M140 176a4 4 0 0 1-4 4 12 12 0 0 1-12-12v-40a4 4 0 0 0-4-4 4 4 0 0 1 0-8 12 12 0 0 1 12 12v40a4 4 0 0 0 4 4 4 4 0 0 1 4 4m-16-84a8 8 0 1 0-8-8 8 8 0 0 0 8 8m104 36A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92 92.1 92.1 0 0 0 92-92"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconInfoThin))
export { Memo as IconInfoThin }
