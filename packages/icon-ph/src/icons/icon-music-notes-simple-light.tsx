/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMusicNotesSimpleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M211.69 27.27a6 6 0 0 0-5.15-1.09l-128 32A6 6 0 0 0 74 64v114.11A34 34 0 1 0 86 204V68.68l116-29v106.43A34 34 0 1 0 214 172V32a6 6 0 0 0-2.31-4.73M52 226a22 22 0 1 1 22-22 22 22 0 0 1-22 22m128-32a22 22 0 1 1 22-22 22 22 0 0 1-22 22"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMusicNotesSimpleLight))
export { Memo as IconMusicNotesSimpleLight }
