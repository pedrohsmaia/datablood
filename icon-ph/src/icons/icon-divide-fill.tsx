/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDivideFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16m0 128a16 16 0 1 1 16-16 16 16 0 0 1-16 16m56-56H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDivideFill))
export { Memo as IconDivideFill }
