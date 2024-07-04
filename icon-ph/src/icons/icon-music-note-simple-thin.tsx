/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMusicNoteSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m209.15 60.17-80-24A4 4 0 0 0 124 40v118.75a44 44 0 1 0 8 25.25V45.38l74.85 22.45a4 4 0 0 0 2.3-7.66M88 220a36 36 0 1 1 36-36 36 36 0 0 1-36 36"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMusicNoteSimpleThin))
export { Memo as IconMusicNoteSimpleThin }
