/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDotsThreeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M60 140a12 12 0 1 1 12-12 12 12 0 0 1-12 12m68 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12m68 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDotsThreeFill))
export { Memo as IconDotsThreeFill }
