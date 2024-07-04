/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRecycleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M96 208a8 8 0 0 1-8 8H40a24 24 0 0 1-20.77-36l28-48.3-13.82-8a8 8 0 0 1 1.92-14.7l32.77-8.77a8 8 0 0 1 9.8 5.66l8.79 32.77a8 8 0 0 1-11.73 9l-13.88-8L33.11 188A8 8 0 0 0 40 200h48a8 8 0 0 1 8 8m32-176a7.85 7.85 0 0 1 6.92 4l28 48.3-13.82 8a8 8 0 0 0 1.9 14.62l32.78 8.79a8.23 8.23 0 0 0 2.07.27 8 8 0 0 0 7.72-5.93l8.79-32.79a8 8 0 0 0-11.72-9l-13.89 8L148.77 28a24 24 0 0 0-41.54 0L84.07 68a8 8 0 0 0 13.85 8l23.16-40a7.85 7.85 0 0 1 6.92-4m108.73 148-23.14-40a8 8 0 0 0-13.84 8l23.14 40a8 8 0 0 1-6.89 12h-56v-16a8 8 0 0 0-13.66-5.66l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 160 232v-16h56a24 24 0 0 0 20.77-36Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRecycleFill))
export { Memo as IconRecycleFill }
