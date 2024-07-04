/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookmarksSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M160 56H64a16 16 0 0 0-16 16v152a8 8 0 0 0 12.65 6.51L112 193.83l51.36 36.68A8 8 0 0 0 176 224V72a16 16 0 0 0-16-16" />
        <Path d="M192 24H88a8 8 0 0 0 0 16h104v152a8 8 0 0 0 16 0V40a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBookmarksSimpleFill))
export { Memo as IconBookmarksSimpleFill }
