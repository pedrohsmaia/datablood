/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderSimpleLockBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 88v4a12 12 0 0 1-24 0h-81.33a20.12 20.12 0 0 1-12-4L92 68H44v128h60a12 12 0 0 1 0 24H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20m0 76v44a12 12 0 0 1-12 12h-72a12 12 0 0 1-12-12v-44a12 12 0 0 1 12-12h4v-4a32 32 0 0 1 64 0v4h4a12 12 0 0 1 12 12m-56-12h16v-4a8 8 0 0 0-16 0Zm32 24h-48v20h48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderSimpleLockBold))
export { Memo as IconFolderSimpleLockBold }
