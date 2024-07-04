/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlaylistBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h116a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m68 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m143.49-52.55a12 12 0 0 1-14.94 8L212 128.13V192a36 36 0 1 1-24-33.94V112a12 12 0 0 1 15.45-11.49l40 12a12 12 0 0 1 8.04 14.94M188 192a12 12 0 1 0-12 12 12 12 0 0 0 12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlaylistBold))
export { Memo as IconPlaylistBold }
