/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEqualizerBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M80 108a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h44a12 12 0 0 1 12 12m-12 28H24a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m0 40H24a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m82-40h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m0 40h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m38-96h44a12 12 0 0 0 0-24h-44a12 12 0 0 0 0 24m44 16h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m0 40h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m0 40h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEqualizerBold))
export { Memo as IconEqualizerBold }
