/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpotifyLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m66.59-84.36a12 12 0 0 1-16.24 4.93 106.7 106.7 0 0 0-100.7 0A11.83 11.83 0 0 1 72 134a12 12 0 0 1-5.66-22.58 130.61 130.61 0 0 1 123.3 0 12 12 0 0 1 4.95 16.22m-16 36a12 12 0 0 1-16.23 5 73 73 0 0 0-68.72 0 12 12 0 0 1-11.28-21.18 97 97 0 0 1 91.28 0 12 12 0 0 1 4.95 16.18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpotifyLogoBold))
export { Memo as IconSpotifyLogoBold }
