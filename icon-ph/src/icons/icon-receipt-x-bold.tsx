/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconReceiptXBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 36H40a20 20 0 0 0-20 20v152a12 12 0 0 0 17.37 10.73L64 205.42l26.63 13.31a12 12 0 0 0 10.74 0L128 205.42l26.63 13.31a12 12 0 0 0 10.74 0L192 205.42l26.63 13.31A12 12 0 0 0 236 208V56a20 20 0 0 0-20-20m-4 152.58-14.63-7.31a12 12 0 0 0-10.74 0L160 194.58l-26.63-13.31a12 12 0 0 0-10.74 0L96 194.58l-26.63-13.31a12 12 0 0 0-10.74 0L44 188.58V60h168ZM95.51 135.51 111 120l-15.49-15.51a12 12 0 0 1 17-17L128 103l15.51-15.52a12 12 0 0 1 17 17L145 120l15.52 15.51a12 12 0 0 1-17 17L128 137l-15.51 15.52a12 12 0 0 1-17-17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconReceiptXBold))
export { Memo as IconReceiptXBold }
