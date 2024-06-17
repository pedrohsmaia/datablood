/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaperPlane = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M237.9 200.09 141.85 32.18a16 16 0 0 0-27.89 0l-95.89 168a16 16 0 0 0 19.25 22.92l90.47-31h.19l90.68 31a16 16 0 0 0 19.24-23Zm-14 7.84L136 177.86V120a8 8 0 0 0-16 0v57.78l-87.88 30.16-.12.06 95.86-168L224 208Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaperPlane))
export { Memo as IconPaperPlane }
