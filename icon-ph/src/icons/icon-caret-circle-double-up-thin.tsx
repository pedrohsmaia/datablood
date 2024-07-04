/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretCircleDoubleUpThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M198.71 57.29A100 100 0 1 0 57.29 198.71 100 100 0 1 0 198.71 57.29m-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05m-30.22-27.88a4 4 0 0 1-5.66 5.66L128 141.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Zm0-56a4 4 0 0 1-5.66 5.66L128 85.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretCircleDoubleUpThin))
export { Memo as IconCaretCircleDoubleUpThin }
