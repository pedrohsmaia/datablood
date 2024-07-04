/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGraduationCapBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m249.8 85.49-116-64a12 12 0 0 0-11.6 0l-116 64a12 12 0 0 0 0 21l21.8 12v47.76a19.89 19.89 0 0 0 5.09 13.32C46.63 194.7 77 220 128 220a136.88 136.88 0 0 0 40-5.75V240a12 12 0 0 0 24 0v-35.88a119.53 119.53 0 0 0 30.91-24.51 19.89 19.89 0 0 0 5.09-13.32v-47.76l21.8-12a12 12 0 0 0 0-21ZM128 45.71 219.16 96 186 114.3a1.88 1.88 0 0 1-.18-.12l-52-28.69a12 12 0 0 0-11.6 21l39 21.49L128 146.3 36.84 96ZM128 196c-40.42 0-64.65-19.07-76-31.27v-33l70.2 38.74a12 12 0 0 0 11.6 0l34.2-18.83v37.23a110.46 110.46 0 0 1-40 7.13m76-31.27a93.21 93.21 0 0 1-12 10.81v-37.15l12-6.62Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGraduationCapBold))
export { Memo as IconGraduationCapBold }
