/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSmileyAngryBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 156a16 16 0 1 1 16-16 16 16 0 0 1-16 16m72-32a16 16 0 1 0 16 16 16 16 0 0 0-16-16m72 4A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84M85.34 102l36 24a12 12 0 0 0 13.32 0l36-24a12 12 0 0 0-13.32-20L128 101.58 98.66 82a12 12 0 0 0-13.32 20M154 167.12a51.1 51.1 0 0 0-52 0 12 12 0 1 0 12 20.76 27.13 27.13 0 0 1 28 0 12 12 0 1 0 12-20.76"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSmileyAngryBold))
export { Memo as IconSmileyAngryBold }
