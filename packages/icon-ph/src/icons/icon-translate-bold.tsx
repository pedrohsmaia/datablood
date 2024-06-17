/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTranslateBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m242.73 210.63-56-112a12 12 0 0 0-21.46 0l-20.52 41A84.2 84.2 0 0 1 106 126.22 107.48 107.48 0 0 0 131.33 68H152a12 12 0 0 0 0-24h-52V32a12 12 0 0 0-24 0v12H24a12 12 0 0 0 0 24h83.13A83.69 83.69 0 0 1 88 110.35 84 84 0 0 1 75.6 91a12 12 0 1 0-21.81 10A107.55 107.55 0 0 0 70 126.24 83.54 83.54 0 0 1 24 140a12 12 0 0 0 0 24 107.47 107.47 0 0 0 64-21.07 108.4 108.4 0 0 0 45.39 19.44l-24.13 48.26a12 12 0 1 0 21.46 10.73L143.41 196h65.17l12.68 25.36a12 12 0 1 0 21.47-10.73M155.41 172 176 130.83 196.58 172Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTranslateBold))
export { Memo as IconTranslateBold }
