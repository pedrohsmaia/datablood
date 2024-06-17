/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMathOperationsFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-61.66 45.66a8 8 0 0 1 11.32-11.32L168 76.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 88l10.35 10.34a8 8 0 0 1-11.32 11.32L168 99.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 88ZM112 176H96v16a8 8 0 0 1-16 0v-16H64a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-80H64a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m80 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMathOperationsFill))
export { Memo as IconMathOperationsFill }
