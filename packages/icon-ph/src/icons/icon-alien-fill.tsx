/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlienFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 16a96.11 96.11 0 0 0-96 96c0 24 12.56 55.06 33.61 83 21.18 28.15 44.5 45 62.39 45s41.21-16.81 62.39-45c21.05-28 33.61-59 33.61-83a96.11 96.11 0 0 0-96-96M64 116a12 12 0 0 1 12-12 36 36 0 0 1 36 36 12 12 0 0 1-12 12 36 36 0 0 1-36-36m80 84h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m12-48a12 12 0 0 1-12-12 36 36 0 0 1 36-36 12 12 0 0 1 12 12 36 36 0 0 1-36 36"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlienFill))
export { Memo as IconAlienFill }
