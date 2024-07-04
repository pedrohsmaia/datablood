/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMusicNotesSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212.92 25.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 64v110.08A36 36 0 1 0 88 204V70.25l112-28v99.83A36 36 0 1 0 216 172V32a8 8 0 0 0-3.08-6.31"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMusicNotesSimpleFill))
export { Memo as IconMusicNotesSimpleFill }
