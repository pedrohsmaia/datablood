/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsHorizontalBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m240.49 136.49-32 32a12 12 0 0 1-17-17L203 140H53l11.52 11.51a12 12 0 0 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L53 116h150l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsHorizontalBold))
export { Memo as IconArrowsHorizontalBold }
