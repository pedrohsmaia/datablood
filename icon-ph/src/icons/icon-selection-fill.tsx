/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSelectionFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M104 200H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16m0-128H72v32a8 8 0 0 1-16 0V72a16 16 0 0 1 16-16h32a8 8 0 0 1 0 16m96 112a16 16 0 0 1-16 16h-32a8 8 0 0 1 0-16h32v-32a8 8 0 0 1 16 0Zm0-80a8 8 0 0 1-16 0V72h-32a8 8 0 0 1 0-16h32a16 16 0 0 1 16 16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSelectionFill))
export { Memo as IconSelectionFill }
