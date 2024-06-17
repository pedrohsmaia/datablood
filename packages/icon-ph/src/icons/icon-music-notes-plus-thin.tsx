/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMusicNotesPlusThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 56a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0V60h-20a4 4 0 0 1 0-8h20V32a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4M84 115.12V204a32.06 32.06 0 1 1-8-21.13V64a4 4 0 0 1 3-3.88l56-14a4 4 0 0 1 2 7.76L84 67.12v39.76l75-18.76a4 4 0 0 1 2 7.76ZM76 204a24 24 0 1 0-24 24 24 24 0 0 0 24-24m136-84v52a32.06 32.06 0 1 1-8-21.13V120a4 4 0 0 1 8 0m-8 52a24 24 0 1 0-24 24 24 24 0 0 0 24-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMusicNotesPlusThin))
export { Memo as IconMusicNotesPlusThin }
