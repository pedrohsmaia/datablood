/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMusicNotesBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M215.38 22.54a12 12 0 0 0-10.29-2.18l-128 32A12 12 0 0 0 68 64v103.35A40 40 0 1 0 92 204v-82.63l104-26v40A40 40 0 1 0 220 172V32a12 12 0 0 0-4.62-9.46M52 220a16 16 0 1 1 16-16 16 16 0 0 1-16 16M92 96.63V73.37l104-26v23.26ZM180 188a16 16 0 1 1 16-16 16 16 0 0 1-16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMusicNotesBold))
export { Memo as IconMusicNotesBold }
