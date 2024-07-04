/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowULeftDownBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 88v88a12 12 0 0 1-24 0V88a44 44 0 0 0-88 0v107l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L76 195V88a68 68 0 0 1 136 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowULeftDownBold))
export { Memo as IconArrowULeftDownBold }
