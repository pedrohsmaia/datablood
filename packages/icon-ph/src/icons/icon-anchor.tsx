/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAnchor = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 136a8 8 0 0 0-8 8 40 40 0 0 1-40 40 47.79 47.79 0 0 0-32 12.27V128h32a8 8 0 0 0 0-16h-32V87a32 32 0 1 0-16 0v25H88a8 8 0 0 0 0 16h32v68.27A47.79 47.79 0 0 0 88 184a40 40 0 0 1-40-40 8 8 0 0 0-16 0 56.06 56.06 0 0 0 56 56 32 32 0 0 1 32 32 8 8 0 0 0 16 0 32 32 0 0 1 32-32 56.06 56.06 0 0 0 56-56 8 8 0 0 0-8-8M112 56a16 16 0 1 1 16 16 16 16 0 0 1-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAnchor))
export { Memo as IconAnchor }
