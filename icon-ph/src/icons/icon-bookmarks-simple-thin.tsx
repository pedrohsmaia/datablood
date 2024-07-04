/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookmarksSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 60H64a12 12 0 0 0-12 12v152a4 4 0 0 0 6.33 3.25L112 188.92l53.69 38.33a3.94 3.94 0 0 0 2.31.75 4.08 4.08 0 0 0 1.83-.44A4 4 0 0 0 172 224V72a12 12 0 0 0-12-12m4 156.23-49.68-35.49a4 4 0 0 0-4.65 0L60 216.23V72a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM204 40v152a4 4 0 0 1-8 0V40a4 4 0 0 0-4-4H88a4 4 0 0 1 0-8h104a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBookmarksSimpleThin))
export { Memo as IconBookmarksSimpleThin }
