/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsVerticalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M162.83 197.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 222.34V33.66L98.83 58.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L132 33.66v188.68l25.17-25.17a4 4 0 0 1 5.66 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsVerticalThin))
export { Memo as IconArrowsVerticalThin }
