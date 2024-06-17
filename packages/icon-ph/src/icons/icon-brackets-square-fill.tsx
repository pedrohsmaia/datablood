/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBracketsSquareFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M104 176a8 8 0 0 1 0 16H72a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H80v96Zm88 8a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h24V80h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBracketsSquareFill))
export { Memo as IconBracketsSquareFill }
