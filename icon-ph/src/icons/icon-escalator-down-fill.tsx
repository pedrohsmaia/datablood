/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEscalatorDownFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM224 144h-36.5L96.26 45.15A16.06 16.06 0 0 0 84.5 40H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h36.5l91.24 98.85A16.06 16.06 0 0 0 171.5 216H224a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEscalatorDownFill))
export { Memo as IconEscalatorDownFill }
