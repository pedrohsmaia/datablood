/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAppWindowBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM60 92a16 16 0 1 1 16 16 16 16 0 0 1-16-16m48 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAppWindowBold))
export { Memo as IconAppWindowBold }
