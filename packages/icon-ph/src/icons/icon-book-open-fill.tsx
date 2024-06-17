/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookOpenFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 64v128a16 16 0 0 1-16 16h-64a24 24 0 0 0-24 24 8 8 0 0 1-16 0 24 24 0 0 0-24-24H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h56a32 32 0 0 1 32 32v88a8 8 0 0 0 16 0V80a32 32 0 0 1 32-32h56a16 16 0 0 1 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBookOpenFill))
export { Memo as IconBookOpenFill }
