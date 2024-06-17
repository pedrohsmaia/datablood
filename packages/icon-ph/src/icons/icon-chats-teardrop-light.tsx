/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatsTeardropLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168.16 74.42A78 78 0 0 0 18 104v66a12 12 0 0 0 12 12h58a78.15 78.15 0 0 0 72 48h66a12 12 0 0 0 12-12v-66a78 78 0 0 0-69.84-77.58M30 104a66 66 0 1 1 66 66H30Zm196 114h-66a66.13 66.13 0 0 1-58.89-36.19 77.92 77.92 0 0 0 71-94.68A66 66 0 0 1 226 152Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatsTeardropLight))
export { Memo as IconChatsTeardropLight }
