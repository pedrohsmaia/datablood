/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignLeft = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m16 64V64a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16m16 0h96V64H80Zm152 48v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h136a16 16 0 0 1 16 16m-16 40v-40H80v40z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignLeft))
export { Memo as IconAlignLeft }
