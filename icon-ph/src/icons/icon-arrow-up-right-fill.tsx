/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowUpRightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 64v104a8 8 0 0 1-13.66 5.66L140 127.31l-70.34 70.35a8 8 0 0 1-11.32-11.32L128.69 116 82.34 69.66A8 8 0 0 1 88 56h104a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowUpRightFill))
export { Memo as IconArrowUpRightFill }
