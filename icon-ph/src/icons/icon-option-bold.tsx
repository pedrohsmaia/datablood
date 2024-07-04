/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOptionBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 184a12 12 0 0 1-12 12h-63.06a19.89 19.89 0 0 1-17.88-11.06L92.58 84H32a12 12 0 0 1 0-24h63.06a19.89 19.89 0 0 1 17.88 11.06L163.42 172H224a12 12 0 0 1 12 12M152 84h72a12 12 0 0 0 0-24h-72a12 12 0 0 0 0 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconOptionBold))
export { Memo as IconOptionBold }
