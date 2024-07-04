/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSmileySadThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8 8 8 0 0 1-8-8m88 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-.54 66a4 4 0 0 1-1.46 5.46 3.93 3.93 0 0 1-2 .54 4 4 0 0 1-3.46-2c-8.21-14.19-21.19-22-36.54-22s-28.33 7.81-36.54 22a4 4 0 0 1-6.92-4c9.55-16.52 25.4-26 43.46-26s33.91 9.48 43.46 26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSmileySadThin))
export { Memo as IconSmileySadThin }
