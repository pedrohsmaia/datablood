/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaperclipHorizontalBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M252 128a60.07 60.07 0 0 1-60 60H44a40 40 0 0 1 0-80h140a12 12 0 0 1 0 24H44a16 16 0 0 0 0 32h148a36 36 0 0 0 0-72H80a12 12 0 0 1 0-24h112a60.07 60.07 0 0 1 60 60"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaperclipHorizontalBold))
export { Memo as IconPaperclipHorizontalBold }
