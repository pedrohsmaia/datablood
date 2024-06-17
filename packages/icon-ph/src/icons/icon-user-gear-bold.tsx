/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserGearBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M152.5 156.53a72 72 0 1 0-89 0 124 124 0 0 0-48.69 35.75 12 12 0 0 0 18.38 15.44C52.54 184.69 79.11 172 108 172c37 0 61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44 124 124 0 0 0-48.69-35.75M60 100a48 48 0 1 1 48 48 48.05 48.05 0 0 1-48-48m182.73 41.23-3.31 1.08 2 2.82a12 12 0 1 1-19.41 14.1l-2.01-2.82-2 2.82a12 12 0 1 1-19.41-14.1l2-2.82-3.31-1.08a12 12 0 0 1 7.42-22.82l3.31 1.07V116a12 12 0 0 1 24 0v3.48l3.31-1.07a12 12 0 0 1 7.42 22.82Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserGearBold))
export { Memo as IconUserGearBold }
