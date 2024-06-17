/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSkullBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M116 132a24 24 0 1 1-24-24 24 24 0 0 1 24 24m48-24a24 24 0 1 0 24 24 24 24 0 0 0-24-24m72 8c0 29.85-13.05 57.78-36 77.52V216a20 20 0 0 1-20 20H76a20 20 0 0 1-20-20v-22.48C33 173.78 20 145.85 20 116 20 58.65 68.45 12 128 12s108 46.65 108 104m-24 0c0-44.11-37.68-80-84-80s-84 35.89-84 80c0 24.31 11.41 47 31.31 62.3a12 12 0 0 1 4.69 9.52V212h16v-20a12 12 0 0 1 24 0v20h16v-20a12 12 0 0 1 24 0v20h16v-24.18a12 12 0 0 1 4.69-9.51C200.59 163 212 140.31 212 116"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSkullBold))
export { Memo as IconSkullBold }
