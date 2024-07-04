/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserFocusBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 48v28a12 12 0 0 1-24 0V52h-24a12 12 0 0 1 0-24h28a20 20 0 0 1 20 20m-12 120a12 12 0 0 0-12 12v24h-24a12 12 0 0 0 0 24h28a20 20 0 0 0 20-20v-28a12 12 0 0 0-12-12M76 204H52v-24a12 12 0 0 0-24 0v28a20 20 0 0 0 20 20h28a12 12 0 0 0 0-24M40 88a12 12 0 0 0 12-12V52h24a12 12 0 0 0 0-24H48a20 20 0 0 0-20 20v28a12 12 0 0 0 12 12m136 92a12 12 0 0 1-9.6-4.79 48 48 0 0 0-76.82 0 12 12 0 0 1-19.18-14.42 72.1 72.1 0 0 1 23.92-20.5 44 44 0 1 1 67.34 0 72.1 72.1 0 0 1 23.92 20.5A12 12 0 0 1 176 180m-48-48a20 20 0 1 0-20-20 20 20 0 0 0 20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserFocusBold))
export { Memo as IconUserFocusBold }
