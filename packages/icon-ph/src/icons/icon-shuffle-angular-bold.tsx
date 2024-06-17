/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShuffleAngularBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240.49 175.51a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L203 196h-30.88a20 20 0 0 1-16.28-8.38L81.82 84H32a12 12 0 0 1 0-24h51.88a20.05 20.05 0 0 1 16.28 8.37l74 103.63H203l-3.52-3.51a12 12 0 0 1 17-17ZM110.4 152.64a12 12 0 0 0-16.74 2.79L81.82 172H32a12 12 0 0 0 0 24h51.88a20 20 0 0 0 16.28-8.38l13-18.24a12 12 0 0 0-2.76-16.74m35.2-49.28a12 12 0 0 0 16.74-2.79L174.18 84H203l-3.52 3.51a12 12 0 0 0 17 17l24-24a12 12 0 0 0 0-17l-24-24a12 12 0 0 0-17 17L203 60h-30.88a20.05 20.05 0 0 0-16.28 8.37l-13 18.25a12 12 0 0 0 2.76 16.74"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShuffleAngularBold))
export { Memo as IconShuffleAngularBold }
