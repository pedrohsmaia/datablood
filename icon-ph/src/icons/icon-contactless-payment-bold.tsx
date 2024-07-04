/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconContactlessPaymentBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M152.58 66.35a130.61 130.61 0 0 1 0 123.3 12 12 0 1 1-21.17-11.3 106.7 106.7 0 0 0 0-100.7 12 12 0 1 1 21.16-11.3Zm-52.22 11.06a12 12 0 0 0-5 16.23 73 73 0 0 1 0 68.72 12 12 0 1 0 21.18 11.28 97 97 0 0 0 0-91.28 12 12 0 0 0-16.18-4.95M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconContactlessPaymentBold))
export { Memo as IconContactlessPaymentBold }
