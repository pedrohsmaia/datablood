/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconImageSquareFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 48h160v77.38l-24.69-24.7a16 16 0 0 0-22.62 0L53.37 208H48Zm32 48a16 16 0 1 1 16 16 16 16 0 0 1-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconImageSquareFill))
export { Memo as IconImageSquareFill }
