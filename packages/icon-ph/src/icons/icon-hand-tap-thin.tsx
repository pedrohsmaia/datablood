/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHandTapThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M52 76a56 56 0 0 1 112 0 4 4 0 0 1-8 0 48 48 0 0 0-96 0 4 4 0 0 1-8 0m136 48a23.88 23.88 0 0 0-16.07 6.19A24 24 0 0 0 132 114.13V76a24 24 0 0 0-48 0v94l-11.26-18.06A24 24 0 0 0 31.22 176l29.32 50a4 4 0 0 0 6.9-4l-29.31-50a16 16 0 0 1 27.72-16l.07.12 18.68 30A4 4 0 0 0 92 184V76a16 16 0 0 1 32 0v68a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0v20a4 4 0 0 0 8 0v-4a16 16 0 0 1 32 0v36c0 22.66-7.51 38.06-7.58 38.21a4 4 0 0 0 1.79 5.37 4.05 4.05 0 0 0 1.79.42 4 4 0 0 0 3.58-2.21c.34-.69 8.42-17.13 8.42-41.79v-36a24 24 0 0 0-24-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHandTapThin))
export { Memo as IconHandTapThin }
