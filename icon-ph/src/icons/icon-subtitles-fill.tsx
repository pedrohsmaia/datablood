/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSubtitlesFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M56 128h16a8 8 0 0 1 0 16H56a8 8 0 0 1 0-16m96 48H56a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m48 0h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-96a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSubtitlesFill))
export { Memo as IconSubtitlesFill }
