/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSelectionForegroundFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 200H72a16 16 0 0 1-16-16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-88H72v16a8 8 0 0 1-16 0v-16a16 16 0 0 1 16-16h16a8 8 0 0 1 0 16m72 72a16 16 0 0 1-16 16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0Zm0-56a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16Zm40 16a16 16 0 0 1-16 16 8 8 0 0 1 0-16V72h-72a8 8 0 0 1-16 0 16 16 0 0 1 16-16h72a16 16 0 0 1 16 16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSelectionForegroundFill))
export { Memo as IconSelectionForegroundFill }
