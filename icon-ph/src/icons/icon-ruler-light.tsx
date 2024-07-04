/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRulerLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M233.91 74.79 181.22 22.1a14 14 0 0 0-19.8 0L22.09 161.41a14 14 0 0 0 0 19.8l52.69 52.69a14 14 0 0 0 19.8 0L233.91 94.59a14 14 0 0 0 0-19.8m-8.49 11.31L86.1 225.41a2 2 0 0 1-2.83 0l-52.69-52.68a2 2 0 0 1 0-2.83L64 136.48l27.76 27.76a6 6 0 1 0 8.48-8.48L72.48 128 96 104.48l27.76 27.76a6 6 0 0 0 8.48-8.48L104.48 96 128 72.49l27.76 27.75a6 6 0 0 0 8.48-8.48L136.49 64l33.41-33.41a2 2 0 0 1 2.83 0l52.69 52.68a2 2 0 0 1 0 2.83"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRulerLight))
export { Memo as IconRulerLight }
