/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVignetteThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM128 76c-37.5 0-68 23.33-68 52s30.5 52 68 52 68-23.33 68-52-30.5-52-68-52m0 96c-33.08 0-60-19.74-60-44s26.92-44 60-44 60 19.74 60 44-26.92 44-60 44"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVignetteThin))
export { Memo as IconVignetteThin }
