/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStoolFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h6.64L56.1 222.75a8 8 0 0 0 6.65 9.15 7.82 7.82 0 0 0 1.25.1 8 8 0 0 0 7.89-6.75L79.68 176h96.64l7.78 49.25A8 8 0 0 0 192 232a7.82 7.82 0 0 0 1.26-.1 8 8 0 0 0 6.65-9.15L177.36 80H184a16 16 0 0 0 16-16m-26.21 96H82.21l12.63-80h66.32Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStoolFill))
export { Memo as IconStoolFill }
