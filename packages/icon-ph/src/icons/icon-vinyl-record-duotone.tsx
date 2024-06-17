/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVinylRecordDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96m0 120a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
          opacity={0.2}
        />
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m0-144a56.06 56.06 0 0 0-56 56 8 8 0 0 1-16 0 72.08 72.08 0 0 1 72-72 8 8 0 0 1 0 16m72 56a72.08 72.08 0 0 1-72 72 8 8 0 0 1 0-16 56.06 56.06 0 0 0 56-56 8 8 0 0 1 16 0m-40 0a32 32 0 1 0-32 32 32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconVinylRecordDuotone))
export { Memo as IconVinylRecordDuotone }
