/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNoteBlankBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h108.69a19.86 19.86 0 0 0 14.14-5.86l51.31-51.31a19.86 19.86 0 0 0 5.86-14.14V48a20 20 0 0 0-20-20M52 52h152v92h-48a12 12 0 0 0-12 12v48H52Zm116 139v-23h23Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNoteBlankBold))
export { Memo as IconNoteBlankBold }
