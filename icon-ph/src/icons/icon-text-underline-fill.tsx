/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextUnderlineFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 72a8 8 0 0 1 16 0v48a32 32 0 0 0 64 0V72a8 8 0 0 1 16 0v48a48 48 0 0 1-96 0Zm96 128H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextUnderlineFill))
export { Memo as IconTextUnderlineFill }
