/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPianoKeysThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M76 44h32v96H76Zm36 104a4 4 0 0 0 4-4V44h24v100a4 4 0 0 0 4 4h12v64h-56v-64Zm36-8V44h32v96ZM44 208V48a4 4 0 0 1 4-4h20v100a4 4 0 0 0 4 4h20v64H48a4 4 0 0 1-4-4m168 0a4 4 0 0 1-4 4h-44v-64h20a4 4 0 0 0 4-4V44h20a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPianoKeysThin))
export { Memo as IconPianoKeysThin }
