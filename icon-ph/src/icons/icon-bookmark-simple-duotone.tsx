/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookmarkSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M192 48v176l-64-40-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBookmarkSimpleDuotone))
export { Memo as IconBookmarkSimpleDuotone }
