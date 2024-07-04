/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderSimpleMinus = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 144a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m72-56v112.89A15.13 15.13 0 0 1 216.89 216H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16m-16 0h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h176Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderSimpleMinus))
export { Memo as IconFolderSimpleMinus }
