/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScooterThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 140a31.29 31.29 0 0 0-6.24.62l-11.82-35.46-22.15-66.42A4 4 0 0 0 168 36h-32a4 4 0 0 0 0 8h29.12l20.54 61.63L134 172H76a32 32 0 1 0-1 8h61a4 4 0 0 0 3.16-1.54l49.54-63.7 9.47 28.39A32 32 0 1 0 212 140M44 196a24 24 0 1 1 24-24 24 24 0 0 1-24 24m168 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScooterThin))
export { Memo as IconScooterThin }
