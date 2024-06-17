/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScreencastFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M56 208a8 8 0 0 1-16 0 8 8 0 0 0-8-8 8 8 0 0 1 0-16 24 24 0 0 1 24 24m-24-56a8 8 0 0 0 0 16 40 40 0 0 1 40 40 8 8 0 0 0 16 0 56.06 56.06 0 0 0-56-56m0-32a8 8 0 0 0 0 16 72.08 72.08 0 0 1 72 72 8 8 0 0 0 16 0 88.1 88.1 0 0 0-88-88m184-80H40a16 16 0 0 0-16 16v40a8 8 0 0 0 8 8 104.11 104.11 0 0 1 104 104 8 8 0 0 0 8 8h72a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScreencastFill))
export { Memo as IconScreencastFill }
