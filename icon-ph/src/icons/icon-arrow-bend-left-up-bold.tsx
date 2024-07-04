/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendLeftUpBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 224a12 12 0 0 1-12 12A108.12 108.12 0 0 1 92 128V61L64.49 88.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L116 61v67a84.09 84.09 0 0 0 84 84 12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendLeftUpBold))
export { Memo as IconArrowBendLeftUpBold }
