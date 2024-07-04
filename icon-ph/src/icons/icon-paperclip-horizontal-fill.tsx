/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaperclipHorizontalFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144H72a24 24 0 0 1 0-48h96a8 8 0 0 1 0 16H72a8 8 0 0 0 0 16h96a24 24 0 0 0 0-48H96a8 8 0 0 1 0-16h72a40 40 0 0 1 0 80"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaperclipHorizontalFill))
export { Memo as IconPaperclipHorizontalFill }
