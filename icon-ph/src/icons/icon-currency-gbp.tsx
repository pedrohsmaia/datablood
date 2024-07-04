/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyGbp = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 208a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h4a28 28 0 0 0 28-28v-36H56a8 8 0 0 1 0-16h32V84a52 52 0 0 1 85.08-40.12 8 8 0 1 1-10.18 12.34A36 36 0 0 0 104 84v36h32a8 8 0 0 1 0 16h-32v36a43.82 43.82 0 0 1-10.08 28H184a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyGbp))
export { Memo as IconCurrencyGbp }
