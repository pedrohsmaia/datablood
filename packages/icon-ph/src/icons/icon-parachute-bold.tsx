/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconParachuteBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 120A108.12 108.12 0 0 0 128 12 108.12 108.12 0 0 0 20 120a12 12 0 0 0 3.85 8.79l.22.2c.17.15.35.31.54.45l.19.16L116 198v14h-4a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24h-4v-14l91.2-68.4a12 12 0 0 0 4.8-9.6m-24.85-12h-31.52c-1.79-29.27-10-50.53-18.93-65.36A84.27 84.27 0 0 1 211.15 108m-110.73 0C103.15 68.76 119 48.11 128 39.38c9 8.73 24.85 29.38 27.58 68.62ZM95.3 42.64c-9 14.83-17.14 36.09-18.93 65.36H44.85A84.27 84.27 0 0 1 95.3 42.64M68 132h48v36Zm72 0h48l-48 36Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconParachuteBold))
export { Memo as IconParachuteBold }
