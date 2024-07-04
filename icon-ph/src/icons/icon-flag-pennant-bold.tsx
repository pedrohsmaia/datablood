/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlagPennantBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m243.94 92.67-184-64A12 12 0 0 0 44 40v176a12 12 0 0 0 24 0v-39.47l175.94-61.2a12 12 0 0 0 0-22.66M68 151.12V56.88L203.47 104Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFlagPennantBold))
export { Memo as IconFlagPennantBold }
