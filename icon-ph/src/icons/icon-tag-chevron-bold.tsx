/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTagChevronBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m240.63 116.91-42.63-64A19.93 19.93 0 0 0 181.32 44H24a12 12 0 0 0-9.88 18.82l45 65.18-45 65.18A12 12 0 0 0 24 212h157.32a19.93 19.93 0 0 0 16.68-8.91l42.67-64a19.94 19.94 0 0 0-.04-22.18M179.18 188H46.87l33.65-48.74a1.63 1.63 0 0 0 .11-.17 19.91 19.91 0 0 0 0-22.18 1.63 1.63 0 0 0-.11-.17L46.87 68h132.31l40 60Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTagChevronBold))
export { Memo as IconTagChevronBold }
