/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGhostFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a96.11 96.11 0 0 0-96 96v96a8 8 0 0 0 13.07 6.19l24.26-19.85 24.27 19.85a8 8 0 0 0 10.13 0L128 202.34l24.27 19.85a8 8 0 0 0 10.13 0l24.27-19.85 24.26 19.85A8 8 0 0 0 224 216v-96a96.11 96.11 0 0 0-96-96m-28 104a12 12 0 1 1 12-12 12 12 0 0 1-12 12m56 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGhostFill))
export { Memo as IconGhostFill }
