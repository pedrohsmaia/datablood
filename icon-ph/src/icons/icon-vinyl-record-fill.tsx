/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVinylRecordFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M72 128a8 8 0 0 1-16 0 72.08 72.08 0 0 1 72-72 8 8 0 0 1 0 16 56.06 56.06 0 0 0-56 56m32 0a24 24 0 1 1 24 24 24 24 0 0 1-24-24m24 72a8 8 0 0 1 0-16 56.06 56.06 0 0 0 56-56 8 8 0 0 1 16 0 72.08 72.08 0 0 1-72 72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVinylRecordFill))
export { Memo as IconVinylRecordFill }
