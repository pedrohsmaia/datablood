/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCursorTextBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M188 208a12 12 0 0 1-12 12h-16a43.86 43.86 0 0 1-32-13.85A43.86 43.86 0 0 1 96 220H80a12 12 0 0 1 0-24h16a20 20 0 0 0 20-20v-36h-12a12 12 0 0 1 0-24h12V80a20 20 0 0 0-20-20H80a12 12 0 0 1 0-24h16a43.86 43.86 0 0 1 32 13.85A43.86 43.86 0 0 1 160 36h16a12 12 0 0 1 0 24h-16a20 20 0 0 0-20 20v36h12a12 12 0 0 1 0 24h-12v36a20 20 0 0 0 20 20h16a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCursorTextBold))
export { Memo as IconCursorTextBold }
