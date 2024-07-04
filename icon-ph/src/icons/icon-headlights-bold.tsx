/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeadlightsBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164 80a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m76 84h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m0-48h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m-92-52v128a20 20 0 0 1-20 20H88a84 84 0 0 1-84-84.63C4.34 81.4 42.43 44 88.9 44H128a20 20 0 0 1 20 20m-24 4H88.9C55.57 68 28.25 94.71 28 127.54A60 60 0 0 0 88 188h36Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHeadlightsBold))
export { Memo as IconHeadlightsBold }
