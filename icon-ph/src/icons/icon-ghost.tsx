/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGhost = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M112 116a12 12 0 1 1-12-12 12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 16v96a8 8 0 0 1-13.07 6.19l-24.26-19.85-24.27 19.85a8 8 0 0 1-10.13 0L128 202.34l-24.27 19.85a8 8 0 0 1-10.13 0l-24.27-19.85-24.26 19.85A8 8 0 0 1 32 216v-96a96 96 0 0 1 192 0m-16 0a80 80 0 0 0-160 0v79.12l16.27-13.31a8 8 0 0 1 10.13 0l24.27 19.85 24.26-19.85a8 8 0 0 1 10.14 0l24.26 19.85 24.27-19.85a8 8 0 0 1 10.13 0L208 199.12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGhost))
export { Memo as IconGhost }
