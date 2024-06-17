/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSelectionForegroundThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M60 216a4 4 0 0 1-4 4h-8a12 12 0 0 1-12-12v-8a4 4 0 0 1 8 0v8a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4m52-4H96a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m-72-48a4 4 0 0 0 4-4v-16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4m128 32a4 4 0 0 0-4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-8a4 4 0 0 0-4-4m0-88a4 4 0 0 0 4-4v-8a12 12 0 0 0-12-12h-8a4 4 0 0 0 0 8h8a4 4 0 0 1 4 4v8a4 4 0 0 0 4 4M56 84h-8a12 12 0 0 0-12 12v8a4 4 0 0 0 8 0v-8a4 4 0 0 1 4-4h8a4 4 0 0 0 0-8m152-48H96a12 12 0 0 0-12 12v40a4 4 0 0 0 4 4h24a4 4 0 0 0 0-8H92V48a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v112a4 4 0 0 1-4 4h-36v-20a4 4 0 0 0-8 0v24a4 4 0 0 0 3.51 3.95 2.17 2.17 0 0 0 .49.05h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSelectionForegroundThin))
export { Memo as IconSelectionForegroundThin }
