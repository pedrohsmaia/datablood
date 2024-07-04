/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaperclipHorizontal = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M248 128a56.06 56.06 0 0 1-56 56H48a40 40 0 0 1 0-80h144a24 24 0 0 1 0 48H80a8 8 0 0 1 0-16h112a8 8 0 0 0 0-16H48a24 24 0 0 0 0 48h144a40 40 0 0 0 0-80H80a8 8 0 0 1 0-16h112a56.06 56.06 0 0 1 56 56"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaperclipHorizontal))
export { Memo as IconPaperclipHorizontal }
