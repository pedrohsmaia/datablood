/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMusicNotesPlusBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 56a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0V68h-12a12 12 0 0 1 0-24h12V32a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12m-16 68v48a40 40 0 1 1-24-36.65V124a12 12 0 0 1 24 0m-24 48a16 16 0 1 0-16 16 16 16 0 0 0 16-16M92 121.37V204a40 40 0 1 1-24-36.65V64a12 12 0 0 1 9.09-11.64l52-13a12 12 0 0 1 5.82 23.28L92 73.37v23.26l53.09-13.27a12 12 0 0 1 5.82 23.28ZM68 204a16 16 0 1 0-16 16 16 16 0 0 0 16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMusicNotesPlusBold))
export { Memo as IconMusicNotesPlusBold }
