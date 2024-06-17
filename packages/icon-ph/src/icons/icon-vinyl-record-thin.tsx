/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVinylRecordThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m0-152a60.07 60.07 0 0 0-60 60 4 4 0 0 1-8 0 68.07 68.07 0 0 1 68-68 4 4 0 0 1 0 8m68 60a68.07 68.07 0 0 1-68 68 4 4 0 0 1 0-8 60.07 60.07 0 0 0 60-60 4 4 0 0 1 8 0m-40 0a28 28 0 1 0-28 28 28 28 0 0 0 28-28m-48 0a20 20 0 1 1 20 20 20 20 0 0 1-20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVinylRecordThin))
export { Memo as IconVinylRecordThin }
