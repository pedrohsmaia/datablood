/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderSimpleLockThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 88v16a4 4 0 0 1-8 0V88a4 4 0 0 0-4-4h-85.33a12.05 12.05 0 0 1-7.2-2.4L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h72a4 4 0 0 1 0 8H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l27.74 20.8a4 4 0 0 0 2.4.8H216a12 12 0 0 1 12 12m0 80v40a4 4 0 0 1-4 4h-72a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h12v-8a24 24 0 0 1 48 0v8h12a4 4 0 0 1 4 4m-56-4h32v-8a16 16 0 0 0-32 0Zm48 8h-64v32h64Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderSimpleLockThin))
export { Memo as IconFolderSimpleLockThin }
