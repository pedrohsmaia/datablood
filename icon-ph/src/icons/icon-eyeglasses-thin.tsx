/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEyeglassesThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 44a4 4 0 0 0 0 8 20 20 0 0 1 20 20v68a40 40 0 0 0-71.2 16h-41.6A40 40 0 0 0 36 140V72a20 20 0 0 1 20-20 4 4 0 0 0 0-8 28 28 0 0 0-28 28v92a40 40 0 0 0 80 0h40a40 40 0 0 0 80 0V72a28 28 0 0 0-28-28M68 196a32 32 0 1 1 32-32 32 32 0 0 1-32 32m120 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEyeglassesThin))
export { Memo as IconEyeglassesThin }
