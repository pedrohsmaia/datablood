/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendDoubleUpLeftThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M82.83 149.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L37.66 104ZM128 100H89.66l41.17-41.17a4 4 0 0 0-5.66-5.66l-48 48a4 4 0 0 0 0 5.66l48 48a4 4 0 0 0 5.66-5.66L89.66 108H128a92.1 92.1 0 0 1 92 92 4 4 0 0 0 8 0 100.11 100.11 0 0 0-100-100"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendDoubleUpLeftThin))
export { Memo as IconArrowBendDoubleUpLeftThin }
