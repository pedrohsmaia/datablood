/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFigmaLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M190.15 96A44 44 0 0 0 160 20H88a44 44 0 0 0-30.15 76 43.9 43.9 0 0 0 1.23 65.12A48 48 0 1 0 140 196v-28.83A44 44 0 0 0 190.15 96M180 64a20 20 0 0 1-20 20h-20V44h20a20 20 0 0 1 20 20M68 64a20 20 0 0 1 20-20h28v40H88a20 20 0 0 1-20-20m20 84a20 20 0 0 1 0-40h28v40zm28 48a24 24 0 1 1-24-24h24Zm44-48a20 20 0 1 1 20-20 20 20 0 0 1-20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFigmaLogoBold))
export { Memo as IconFigmaLogoBold }
