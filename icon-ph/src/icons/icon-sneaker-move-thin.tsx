/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSneakerMoveThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 156a36 36 0 0 1-36-36V95.69a12 12 0 0 0-10.95-11.94c-26.11-2.11-43.77-19.41-45-44.07a12 12 0 0 0-3.49-7.91l-8.23-8.23a11.93 11.93 0 0 0-16.76-.2l-.07.07-64 64.12a12 12 0 0 0 0 17l107.27 104a11.93 11.93 0 0 0 8.48 3.51H240a12 12 0 0 0 12-12v-8A36 36 0 0 0 216 156m28 44a4 4 0 0 1-4 4h-92.69a4 4 0 0 1-2.87-1.21L37.17 98.84a4 4 0 0 1 0-5.65l64-64.09a4 4 0 0 1 5.55.1l8.23 8.22a4 4 0 0 1 1.16 2.65c1.42 28.93 22 49.2 52.33 51.65a4 4 0 0 1 3.59 4V116H152a4 4 0 0 0 0 8h20.19a43.84 43.84 0 0 0 9.89 24H160a4 4 0 0 0 0 8h30.75a43.75 43.75 0 0 0 25.25 8 28 28 0 0 1 28 28ZM64 180H32a4 4 0 1 1 0-8h32a4 4 0 1 1 0 8m36 28a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSneakerMoveThin))
export { Memo as IconSneakerMoveThin }
