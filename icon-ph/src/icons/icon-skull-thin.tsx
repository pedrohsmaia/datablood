/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSkullThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 108a24 24 0 1 0 24 24 24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16m72-40a24 24 0 1 0 24 24 24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16M128 20C72.86 20 28 63.07 28 116c0 33.43 18.33 64.64 48 82v18a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-18c29.67-17.38 48-48.59 48-82 0-52.93-44.86-96-100-96m46.06 172.19a4 4 0 0 0-2.06 3.5V216a4 4 0 0 1-4 4h-20v-28a4 4 0 0 0-8 0v28h-24v-28a4 4 0 0 0-8 0v28H88a4 4 0 0 1-4-4v-20.31a4 4 0 0 0-2.06-3.5C53.6 176.48 36 147.29 36 116c0-48.52 41.27-88 92-88s92 39.48 92 88c0 31.29-17.6 60.48-45.94 76.19"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSkullThin))
export { Memo as IconSkullThin }
