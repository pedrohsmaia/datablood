/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendUpRightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m226.83 106.83-48 48a4 4 0 0 1-5.66-5.66L214.34 108H128a92.1 92.1 0 0 0-92 92 4 4 0 0 1-8 0 100.11 100.11 0 0 1 100-100h86.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendUpRightThin))
export { Memo as IconArrowBendUpRightThin }
